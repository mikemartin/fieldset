<template>
  <div>
    <v-select
      name="fieldset"
      :placeholder="__('Fieldsets')"
      :options="fieldsetSuggestions"
      :multiple="false"
      :searchable="true"
      :reduce="(opt) => opt.value"
      v-model="value"
      @change="updateFieldset"
      @input="updateFieldset"
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
  
  data() {
    const fieldsetSuggestions = Object.entries(this.meta.fieldsets).map(([_, fieldset]) => ({
        value: fieldset.handle,
        label: fieldset.title,
      }));
    return { fieldsetSuggestions };
  },

  methods: {
    updateFieldset(handle) {
      this.update(handle);
    }
  },
};
</script>
