/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */

 import DynamicFieldGroupFieldtype from './components/fieldtypes/DynamicFieldGroupFieldtype.vue';
 import FieldGroupFieldtype from './components/fieldtypes/FieldGroupFieldtype.vue';
 import FieldGroupConfig from './components/fieldtypes/FieldGroupConfigFieldtype.vue';
 
 Statamic.booting(() => {
     Statamic.$components.register('dynamic_field_group-fieldtype', DynamicFieldGroupFieldtype);
     Statamic.$components.register('fieldgroup-fieldtype', FieldGroupFieldtype);
     Statamic.$components.register('fieldgroup_config-fieldtype', FieldGroupConfig); 
 });
 