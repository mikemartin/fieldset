<?php

namespace App\Http\Controllers;

use Statamic\Facades\Utility;
use Statamic\Http\Controllers\CP\CpController;

class FieldsetDevController extends CpController
{
    public function index()
    {
      return view('cp-fieldset-dev');
    }

}
