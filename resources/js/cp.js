/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */

import FieldsetSelectorFieldtype from './components/fieldtypes/FieldsetSelectorFieldtype.vue';

Statamic.booting(() => {
  Statamic.$components.register('fieldset_selector-fieldtype', FieldsetSelectorFieldtype);
});
 