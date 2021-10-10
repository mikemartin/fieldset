<template>
  <div>
    <div class="flex items-center mb-3">
      <h1 class="flex-1" v-text="fieldset.title" />
      <a
        :href="fieldset.url"
        target="_blank"
        class="btn mr-2"
        v-text="__('Preview on fieldset.dev')"
      />
      <button
        v-if="fieldset.installed"
        class="btn"
        :disabled="processing"
        v-text="__('Installed')"
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
            v-text="__('Price')"
          />
          <div class="font-bold" v-text="'Free'" />
        </div>
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
        <div class="flex-1 text-lg" v-if="downloads">
          <div
            class="little-heading p-0 mb-1 text-grey-70"
            v-text="__('Downloads')"
          />
          <div class="font-bold">{{ downloads }}</div>
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
      waitingForRefresh: false,
      downloads: null,
    };
  },

  computed: {
    description() {
      return this.fieldset.subtitle;
    },
  },

  created() {
    this.getDownloadCount();
  },

  methods: {
    install() {
      console.log("todo");
    },

    fieldsetRefreshed() {
      this.waitingForRefresh = false;
    },

    getDownloadCount() {
      // todo
      this.downloads = 100;
    },
  },
};
</script>
