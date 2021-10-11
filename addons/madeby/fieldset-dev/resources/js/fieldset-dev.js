import FieldsetGroupFieldtype from './components/fieldtypes/FieldsetGroupFieldtype.vue';
import FieldsetGroupConfig from './components/fieldtypes/FieldsetGroupConfigFieldtype.vue';
import FieldsetList from './components/fieldtypes/FieldsetList';
import FieldsetDetails from './components/fieldtypes/FieldsetDetails';
import SVGIcon from './components/fieldtypes/SVGIcon';

Statamic.booting(() => {
    Statamic.$components.register('fieldset_group-fieldtype', FieldsetGroupFieldtype);
    Statamic.$components.register('fieldset_group_config-fieldtype', FieldsetGroupConfig); 
    Statamic.$components.register('fieldset-list', FieldsetList);
    Statamic.$components.register('fieldset-details', FieldsetDetails);
    Statamic.$components.register('fiedlset-dev-icon', SVGIcon);
});