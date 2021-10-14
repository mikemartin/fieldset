<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Statamic\Console\RunsInPlease;

class CopyIcons extends Command
{
    use RunsInPlease;

    /**
    * The name of the console command.
    *
    * @var string
    */
    protected $name = 'madeby:icons';

     /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Copy icons into the addon.";


     /**
     * Execute the console command.
     *
     * @return bool|null
     */
    public function handle()
    {


        try {
          File::copyDirectory(base_path("public/assets/icons"), base_path('addons/madeby/fieldset-dev/resources/js/components/fieldtypes/svg'));
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }

        $this->info("I think that worked!");
    }

}