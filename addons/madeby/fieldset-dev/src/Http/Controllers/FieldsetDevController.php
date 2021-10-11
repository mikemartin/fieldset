<?php

namespace MadeBy\FieldsetDev\Http\Controllers;
use Statamic\Http\Controllers\CP\CpController;

class FieldsetDevController extends CpController
{
    public function index()
    {
      return view('fieldset-dev::index');
    }

}
