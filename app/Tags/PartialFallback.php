<?php

namespace App\Tags;

use Statamic\Tags\Partial;
use Statamic\Support\Arr;

class PartialFallback extends Partial
{
    public function wildcard($tag)
    {


        // We pass the original non-studly case value in as
        // an argument, but fall back to the studly version just in case.
        $partial = $this->params->get('src', $tag);


        $partials = explode(",", $partial);
        $partial =  Arr::get($partials,0);
        $fallback = Arr::get($partials,1);

        $variables = array_merge($this->context->all(), $this->params->all(), [
            '__frontmatter' => $this->params->all(),
            'slot' => $this->isPair ? trim($this->parse()) : null,
        ]);

        $partial_name = $this->viewName($partial);

        if($fallback && !view()->exists($partial_name)) {
            $partial_name = $this->viewName($fallback);
        }

        return view($partial_name, $variables)
            ->withoutExtractions()
            ->render();
    }

    // protected function viewName($partial)
    // {
    //     $partial = str_replace('/', '.', $partial);

    //     if (view()->exists($underscored = $this->underscoredViewName($partial))) {
    //         return $underscored;
    //     }

    //     if (view()->exists($subdirectoried = 'partials.'.$partial)) {
    //         return $subdirectoried;
    //     }

    //     return $partial;
    // }

    // protected function underscoredViewName($partial)
    // {
    //     $bits = collect(explode('.', $partial));

    //     $last = $bits->pull($bits->count() - 1);

    //     return $bits->implode('.').'._'.$last;
    // }
}
