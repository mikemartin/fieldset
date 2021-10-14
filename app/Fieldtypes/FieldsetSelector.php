<?php

namespace App\Fieldtypes;

use Statamic\Fields\Fieldtype;
use Statamic\Facades\Fieldset;
use Illuminate\Support\Arr;
use Statamic\Fields\FieldTransformer;

class FieldsetSelector extends Fieldtype
{
    public $icon = "select";
    protected $defaultValue = [];

    public function process($data)
    {
        return $data;
    }
    public function preload()
    {
        return ['fieldsets' => Fieldset::all()->mapWithKeys(function ($fieldset) {
          return [$fieldset->handle() => [
              'handle' => $fieldset->handle(),
              'title' => $fieldset->title(),
              'fields' => collect(Arr::get($fieldset->contents(), 'fields'))->map(function ($field) {
                  return FieldTransformer::toVue($field);
              })->sortBy('config.display')->values()->all(),
          ]];
      })->sortBy('title')
    ];
    }
}