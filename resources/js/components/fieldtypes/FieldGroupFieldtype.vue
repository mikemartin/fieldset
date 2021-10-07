<template>
  <div>
    <component is="style">{{ css }}</component>
    <publish-field
      v-for="field in fields"
      v-show="showField(field)"
      :key="field.handle"
      :config="field"
      :value="values[field.handle]"
      :meta="meta[field.handle]"
      :errors="errors[field.handle]"
      :read-only="readOnly"
      :can-toggle-label="canToggleLabels"
      :name-prefix="namePrefix"
      @input="updated(field.handle, $event)"
      @meta-updated="$emit('meta-updated', field.handle, $event)"
      @synced="$emit('synced', field.handle)"
      @desynced="$emit('desynced', field.handle)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      style="paddingLeft:0;paddingRight:0;"
    />
  </div>
</template>
<script>
import ValidatesFieldConditions from "../../../../vendor/statamic/cms/resources/js/components/field-conditions/ValidatorMixin.js";
export default {
  mixins: [Fieldtype, ValidatesFieldConditions],
  inject: ["storeName"],
  data() {
    return {
      // This is a bit of a hack to effect the partent element but should be safe. 
      css: this.config.show_label ? "" : `.publish-field__${this.config.handle} > .field-inner { display: none; } .publish-field__${this.config.handle}{ padding-top: 0; }`,
    };
  },
  methods: {
    updated(handle, value) {
      let group = JSON.parse(JSON.stringify(this.values));
      group[handle] = value;
      this.update(group);
    },
  },
  computed: {
    state() {
      return this.$store.state.publish[this.storeName];
    },
    values() {
      // merge default values with "real" values
      return { ...this.meta.defaults, ...this.value };
    },
    errors() {
      return this.state.errors;
    },
    fields() {
      return this.config.fields;
    },
  },
};
</script>