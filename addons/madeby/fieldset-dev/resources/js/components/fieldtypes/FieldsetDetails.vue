<template>
  <div>
    <div class="flex items-center mb-3">
      <h1 class="flex-1" v-text="fieldset.title" />
      <a
        :href="fieldset.permalink"
        target="_blank"
        class="btn mr-2"
        v-text="__('Preview on fieldset.dev')"
      />
      <button
        v-if="loading"
        class="btn"
        v-text="__('Loading...')"
      />
      <button
        v-else-if="installed"
        class="btn"
        v-text="__('Installed: View locally')"
        @click="goTo"
      />
      <button
        v-else
        class="btn btn-primary"
        :disabled="processing"
        @click="install"
        v-text="__('Import')"
      />
    </div>
    <div>
      <div class="card mb-3 flex items-center">
        <div class="flex-1 text-lg">
          <div
            class="little-heading p-0 mb-1 text-grey-70"
            v-text="__('Author')"
          />
          <a :href="fieldset.author.website" class="relative flex items-center">
            <img
              :src="fieldset.author.avatar"
              :alt="fieldset.author.name"
              class="rounded-full w-6 mr-1"
            />
            <span class="font-bold">{{ fieldset.author.name }}</span>
          </a>
        </div>
        <div class="flex-1 text-lg" v-if="fieldset.num_fields">
          <div
            class="little-heading p-0 mb-1 text-grey-70"
            v-text="__('No. Fields')"
          />
          <div class="font-bold">{{fieldset.num_fields}}</div>
        </div>
        <div class="flex-1 text-lg" v-if="fieldset.downloads">
          <div
            class="little-heading p-0 mb-1 text-grey-70"
            v-text="__('Downloads')"
          />
          <div class="font-bold">{{ fieldset.downloads }}</div>
        </div>
      </div>
      <div class="card content p-4" v-html="description" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["fieldset"],

  data() {
    return {
      loading: true,      
      installed: null      
    };
  },

  computed: {
    description() {
      return this.fieldset.subtitle;
    },
  },

  created() {
    this.isInstalled();
  },

  methods: {
    
    isInstalled() {
      return this.$axios
        .get(`/cp/fieldset-dev/installed/${this.fieldset.fieldset}`)
        .then((response) => {
          this.loading = false;
          this.installed = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.loading = false;
          this.error = true;
          this.$toast.error(__("Something went wrong"));
        });
    },

    goTo() { 
      window.location = cp_url(`fields/fieldsets/fsdev-${this.fieldset.fieldset}/edit`);
    },

    install() {
      this.$axios
        .get("/fieldset-dev/download/" + this.fieldset.fieldset)
        .then(() => {
          this.installed = true;
          this.$toast.success(__("Fieldset saved"));
        })
        .catch((e) => {
          console.log(e);
          this.loading = false;
          this.error = true;
          this.$toast.error(__("Something went wrong"));
        });
    },

  },
};
</script>
