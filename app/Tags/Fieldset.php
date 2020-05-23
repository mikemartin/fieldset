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
     public function __call($method, $args)
     {
         $from = Arr::get($this->context, $method)->raw();
         $this->parameters['from'] = $from;
         return $this->index();
     }

    /**
     * The {{ fieldset from="" }} ... {{ /fieldset }}
     *
     * @return array
     */
    public function index()
    {
      $entry = $this->fetchEntry($this->get('from'));
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
      return Facades\Fieldset::find($blueprint)->contents()['fields'];
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