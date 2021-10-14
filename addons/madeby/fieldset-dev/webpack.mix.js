let mix = require("laravel-mix");

mix.js("resources/js/fieldset-dev.js", "dist/js").vue();
mix.styles("resources/css/fieldset-dev.css", "dist/css/fieldset-dev.css");
