/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */

 import DynamicFieldGroupFieldtype from './components/fieldtypes/DynamicFieldGroupFieldtype.vue';

 Statamic.booting(() => {
     Statamic.$components.register('dynamic_field_group-fieldtype', DynamicFieldGroupFieldtype);
    });
 