<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Statamic\Console\RunsInPlease;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Console\Input\InputArgument;

class Scaffold extends Command
{
    use RunsInPlease;

    /**
    * The name of the console command.
    *
    * @var string
    */
    protected $name = 'madeby:scaffold';

     /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Scaffold example and blueprint for a fieldset.";

     /**
     * The fieldset name.
     *
     * @var string
     */
    protected $fieldset_name = '';

     /**
     * The fieldset filename.
     *
     * @var string
     */
    protected $filename = '';

     /**
     * The fieldset instructions.
     *
     * @var string
     */
    protected $instructions = '';

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return array_merge(parent::getArguments(), [
            ['fieldset', InputArgument::OPTIONAL, 'Name of the fieldset'],
        ]);
    }

     /**
     * Execute the console command.
     *
     * @return bool|null
     */
    public function handle()
    {

        if($this->argument("fieldset")) {
          $this->filename = $this->argument("fieldset");
        } else {
          $this->filename = $this->ask('What is filename of the fieldset you want to scaffold?');
        }

        try {
            $this->fieldsetExists($this->filename);
            $fieldset = Yaml::parseFile(base_path("resources/fieldsets/{$this->filename}.yaml"));
            $this->title = $fieldset["title"];
            $this->checkExistence("Example Blueprint", "resources/blueprints/collections/examples/{$this->filename}.yaml");
            $this->checkExistence("Example Entry", "content/collections/examples/{$this->filename}.md");
            $this->checkExistence("Fieldset Entry", "content/collections/fieldsets/{$this->filename}.md");
            $this->createBlueprint();
            $this->createExampleEntry();
            $this->createFieldsetEntry();
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }

        $this->info("Blueprint and example entry for '{$this->filename}' added.");
    }

    /**
     * Check fieldset already exist.
     *
     * @return bool|null
     */
    protected function fieldsetExists($filename)
    {
        if (!File::exists(base_path("resources/fieldsets/{$this->filename}.yaml"))) {
            throw new \Exception("Please create the Fieldset '{$filename}' first!");
        }
    }

    /**
     * Check if a file doesn't already exist.
     *
     * @return bool|null
     */
    protected function checkExistence($type, $path)
    {
        if (File::exists(base_path($path))) {
            throw new \Exception("{$type} '{$path}' already exists.");
        }
    }

    /**
     * Create fieldset.
     *
     * @return bool|null
     */
    protected function createBlueprint()
    {
 
        $stub = File::get(__DIR__.'/stubs/blueprint.yaml.stub');
        $contents = Str::of($stub)
        ->replace('{{ title }}', $this->title)
        ->replace('{{ filename }}', $this->filename);

        File::put(base_path("resources/blueprints/collections/examples/{$this->filename}.yaml"), $contents);
    }

    /**
     * Create Example entry.
     *
     * @return bool|null
     */
    protected function createExampleEntry()
    {
 
      $stub = File::get(__DIR__.'/stubs/example.md.stub');
      $contents = Str::of($stub)
      ->replace('{{ id }}', $this->filename)
      ->replace('{{ title }}', $this->title)
      ->replace('{{ blueprint }}', $this->filename);
      File::put(base_path("content/collections/examples/{$this->filename}.md"), $contents);
    }

    /**
     * Create Fieldset entry.
     *
     * @return bool|null
     */
    protected function createFieldsetEntry()
    {
 
      $stub = File::get(__DIR__.'/stubs/fieldset.md.stub');
      $contents = Str::of($stub)
      ->replace('{{ id }}', $this->filename)
      ->replace('{{ title }}', $this->title)
      ->replace('{{ example_id }}', $this->filename)
      ->replace('{{ fieldset }}', $this->filename);
      File::put(base_path("content/collections/fieldsets/{$this->filename}.md"), $contents);
    }

}