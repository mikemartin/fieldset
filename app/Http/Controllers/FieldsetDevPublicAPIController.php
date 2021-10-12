<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Statamic\Facades\Fieldset;
use Statamic\Facades\File;
use Statamic\Facades\Entry;
use Statamic\Facades\User;
use Illuminate\Pagination\Paginator;

class FieldsetDevPublicAPIController extends BaseController
{
    public function show ($handle) {
      $handle = str_replace('/', '.', $handle);
      $path = str_replace('.', '/', $handle);
      $directory = Fieldset::directory();
    
      if (!File::exists($path = "{$directory}/{$path}.yaml")) {
        return null;
      }
    
      return response(File::get($path), 200)
        ->header('Content-Type', 'text');
    }

    public function download ($handle) {
      // ToDo: Count download here 
      $entry = Entry::query()->where('collection', 'fieldsets')->where('fieldset', $handle)->first();
      $downloads = ((int) $entry->get('downloads') ?? 0) + 1;
      $entry->set('downloads', $downloads);
      $entry->save();
      return $this->show($handle);
    }

    public function list (Request $request) {

      $page = Paginator::resolveCurrentPage();
      $perPage = 8;
      
      $query = Entry::query();
      $query->where('collection', 'fieldsets');
    
      if ($search = $request->installed) {
        dd('installed');
        $query->where('installed', '==', true);
      }
    
      if ($search = $request->q) {
        $query->where('title', 'like', '%' . $search . '%');
      }
    
      $query->orderBy('downloads');
      $query->offset($page -1);
      $query->limit($perPage);
    
      $entries = $query->get(["title", "subtitle", "author", "icon", "color", "installed", "fieldset", "downloads", "num_fields"])
      ->map(function ($fieldset) {
        $handle = $fieldset->get("fieldset");
        $handle = str_replace('/', '.', $handle);
        $color = $fieldset->get("color");
        $user = User::find($fieldset->get("author"));
        $fieldset->author = [
          "name" => $user->get("name"),
          "avatar" => $user->avatar()
        ];
        $fieldset->permalink = $fieldset->absoluteUrl();
        $fieldset->color = $color["label"];
        return $fieldset->data();
      });
    
      return new Paginator(
        $entries,
        $perPage,
        $page,    
        ['path' => Paginator::resolveCurrentPath()]
      );
        
    }

}
