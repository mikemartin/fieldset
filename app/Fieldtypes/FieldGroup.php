<?php

namespace App\Fieldtypes;

use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;

class FieldGroup extends Fieldtype
{
    public $icon = "section";
    protected $defaultValue = [];

    protected function configFieldItems(): array
    {
        return [
            'fields' => [
                'display' => __('Select a fieldset'),
                'required' => true,
                'instructions' => __("Changes to this fieldset will stay in sync AND values will be nested under the current handle."),
                'type' => 'fieldgroup_config',
            ],
            'show_label' => [
                'display' => __('Show Label'),
                'instructions' => __("Show this field's label."),
                'type' => 'toggle',
            ],
        ];
    }

    public function process($data)
    {
        return $data;
    }

    public function fields()
    {
        return new Fields($this->config('fields'), $this->field()->parent(), $this->field());
    }

    public function preload()
    {
      return [
            "defaults" => $this->fields()->all()->map(function ($field) {
                return $field->fieldtype()->preProcess($field->defaultValue());
            })->all()
        ];
    }

}