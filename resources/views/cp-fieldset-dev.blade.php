@extends('statamic::layout')
@section('title', 'Fieldset.dev')

@section('content')

    <header class="mb-3">
        <h1>{{ 'Fieldset.dev' }}</h1>
    </header>

    <div class="card p-2 content">
        <fieldset-search />
    </div>

@endsection