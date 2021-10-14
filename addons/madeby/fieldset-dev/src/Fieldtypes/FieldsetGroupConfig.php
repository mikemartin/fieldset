<?php

namespace MadeBy\FieldsetDev\Fieldtypes;
use Statamic\Fieldtypes\NestedFields;

class FieldsetGroupConfig extends NestedFields
{
  public static $handle = 'fieldset_group_config';
  protected $selectable = false;
}
