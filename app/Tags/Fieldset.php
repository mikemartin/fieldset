<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Statamic\Support\Arr;
use Statamic\Facades;
use Statamic\Entries\EntryCollection;
use Statamic\Facades\Entry;

class Fieldset extends Tags
{
    /**
     * {{ fieldset:* }} ... {{ /fieldset:* }}.
     */
     public function wildcard($tag)
     {
        if($tag !== "example") dd($tag);
        $from = Arr::get($this->context, $tag)->raw();
        $this->params['from'] = $from;
        return $this->index();
        
     }

    /**
     * The {{ fieldset from="" }} ... {{ /fieldset }}
     *
     * @return array
     */
    public function index()
    {
      $entry = $this->fetchEntry($this->params->get('from'));
      $blueprint = $this->fetchFields($entry);
      $fields = $this->mapFields($entry, $blueprint);
      return $fields->all();
    }

    /**
     * The {{ fieldset:count from="" }} ... {{ /fieldset }}
     *
     * @return array
     */
    public function count()
    {
      $entry = $this->fetchEntry($this->get('from')->id());
      $blueprint = $this->fetchFields($entry);

      $fields = $this->mapFields($entry, $blueprint);
      return $fields->count();
    }

    private function fetchEntry($id)
    {
      return Entry::find($id)->toAugmentedArray();
    }

    private function fetchFields($entry)
    {
      $blueprint = $entry['blueprint'];
      // This is assuming that there is a fieldset with a handle that matches the blueprint handle
      return Facades\Fieldset::find($blueprint)->contents()['fields'];
      

      // Alternative I was investigating...
      // if(isset($entry['fieldset_handle'])) {
      //   // This is assuming that there is a fieldset with a handle that matches the blueprint handle
      //   $fieldset_handle = $entry['fieldset_handle'];
      //   return Facades\Fieldset::find($fieldset_handle)->contents()['fields'];
      // }

    }

    private function mapFields($entry, $blueprint)
    {
      $fields = collect($blueprint);

      return $fields->flatMap(function($field) use ($entry) {
        $field['field']['handle'] = $field['handle'];
        $field['field']['value'] = $entry[$field['handle']];
        return [$field['field']];
      });
    }
}