<template>
  <div>
    <v-select
      name="fieldset"
      :options="options"
      placeholder="Search fieldset.dev"
      :searchable="true"
      class="w-full"
      @change="fetchFieldset"
      @input="fetchFieldset"
    >
      <template v-slot:no-options>
        <div
          class="text-sm text-grey-70 text-left py-1 px-2"
          v-text="__('No options to choose from.')"
        />
      </template>
      <template v-slot:option="option">
        <div class="fieldset-card-option">
          <span v-html="option.icon" class="fieldset-card-small-icon"></span>
          {{ option.label }}
        </div>
    </template>
    </v-select>

    <div class="my-2" v-if="entry">
      <div
        class="fieldset-card"
      >
        <div class="media-object">
          <div class="media-object--image" v-html="icon">
          </div>
          <div class="flex-1">
            <p
              class="fieldset-card--title"
            >
              {{entry.title}}
            </p>
            <p class="fieldset-card--subtitle">
              {{entry.subtitle}}
            </p>
          </div>
        </div>
        <div
          class="fieldset-card--footer"
        >
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-6 w-6 rounded-full"
                :src="'https://www.gravatar.com/avatar/' + entry.author.name"
                alt=""
              />
            </div>
            <div class="ml-2">
              <p class="author-name">
                {{entry.author.name}}
              </p>
            </div>
          </div>
          <div class="ml-2 flex items-baseline text-sm leading-5">
            <a
              href="#"
              class="self-center flex-shrink-0 inline-block text-white text-opacity-75 hover:text-opacity-100 hover:text-pop"
            >
            <svg  viewBox="0 0 21 21" class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><path d="m2.5 7.5 4 4.232 4-4.191"/><path d="m6.5.5v11"/><path d="m.5 14.5h12"/></g></svg>
            </a>
            
            <a
              href="#"
              class="self-center flex-shrink-0 inline-block text-black text-opacity-75 hover:text-opacity-100 hover:text-pop"
            >
              <svg
                class="h-5 w-5 text-current"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <span class="sr-only">Likes</span>
            <span class="ml-1">5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [Fieldtype],

  data() {
    return {
      loading: true,
      options: [],
      entry: null,
      icon: null,
    };
  },

  created() {
    this.getOptions();
  },

  methods: {
    getOptions() {
      fetch("/api/fieldsets").then((resp) => {
        resp.json().then((options) => {
          this.loading = false;
          this.options = options.map((o) => {
            const { handle, title, ...rest } = o;
            return {
            value: handle,
            label: title,
            ...rest
          }});

        });
      });
    },
    fetchFieldset(opt) {
      this.icon = opt.icon;
      console.log(opt)
      fetch("/api/collections/fieldsets/entries/" + opt.id).then((resp) => {
        resp.json().then(({ data }) => {
          console.log(data)
          this.entry = data;
        });
      });
      // fetch("/api/fieldset/" + opt.handle).then((resp) => {
      //   resp.text().then((text) => {
      //     console.log(text)
      //     // this.options = options.map(o => ({ value: o.handle, label: o.title}));
      //   });
      // });
    },
  },
};
</script>
