<?php

namespace App\Fieldtypes;

use Statamic\Fieldtypes\NestedFields;

class FieldGroupConfig extends NestedFields
{
  public static $handle = 'fieldgroup_config';
  protected $selectable = false;
}
