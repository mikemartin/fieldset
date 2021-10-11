<?php

namespace MadeBy\FieldsetDev\Fieldtype;
use Statamic\Fieldtypes\NestedFields;

class FieldsetGroupConfig extends NestedFields
{
  public static $handle = 'fieldgroup_config';
  protected $selectable = false;
}
