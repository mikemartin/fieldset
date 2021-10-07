<template>
  <div>
    <v-select
      name="fieldset"
      :placeholder="__('Fieldsets')"
      :options="fieldsetSuggestions"
      :multiple="false"
      :searchable="true"
      :selected="fieldset"
      :reduce="(opt) => opt.value"
      v-model="fieldset"
      @change="linkFieldset"
      @input="linkFieldset"
    >
      <template v-slot:no-options>
        <div
          class="text-sm text-grey-70 text-left py-1 px-2"
          v-text="__('No options to choose from.')"
        />
      </template>
    </v-select>

  </div>
</template>

<script>
export default {
  
  mixins: [Fieldtype],

  props: {
    excludeFieldset: String,
  },

  computed: { 
    fieldset() {
      if(!this.value || !this.value[0]) return null
      return this.value[0].fieldset;
    }
  },
  data() {
    const fieldsets = JSON.parse(
      JSON.stringify(
        Object.values(this.$config.get("fieldsets")).filter(
          (fieldset) => fieldset.handle != this.excludeFieldset
        )
      )
    );

    return {
      fieldsetSuggestions: fieldsets.map((fieldset) => ({
        value: fieldset.handle,
        label: fieldset.title,
      })),
      fieldsets,
    };
  },

  methods: {
    linkFieldset(v) {
      this.update([{ 
        type: 'import',
        fieldset: v,
        prefix: null, 
      }]);
    }
  },
};
</script>
