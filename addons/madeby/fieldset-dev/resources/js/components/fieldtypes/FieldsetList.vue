<template>
  <div>
    <div class="breadcrumb flex" v-if="showingFieldset">
      <button
        @click="showingFieldset = false"
        class="flex-initial flex p-1 -m-1 items-center text-xs text-grey-70 hover:text-grey-90"
      >
        <svg-icon name="chevron-right" class="h-6 w-4 rotate-180" />
        <span v-text="__('Community (fieldset.dev)')" />
      </button>
    </div>

    <div class="flex mb-3" v-if="!showingFieldset">
      <h1 class="flex-1" v-text="__('Community (fieldset.dev)')" />
    </div>

    <div v-if="error" class="card text-sm">
      {{
        __(
          "Something went wrong while loading community fieldsets. Try again later."
        )
      }}
    </div>

    <div v-if="initializing" class="card p-3 text-center">
      <loading-graphic />
    </div>

    <data-list :rows="rows" v-if="!initializing && !showingFieldset">
      <div class="" slot-scope="{ rows: fieldsets }">
        <div class="card p-0">
          <!-- Filtering was removed from v1 -->
          <!-- <div class="border-b px-2 text-sm">
            <button
              class="data-list-filter-link"
              :class="{ active: filter === 'all' }"
              @click="filter = 'all'"
              v-text="__('All')"
            />
            <button
              class="data-list-filter-link"
              :class="{ active: filter === 'installed' }"
              @click="filter = 'installed'"
            >
              {{ __("Installed") }}
              <span class="badge" v-if="installCount">{{ installCount }}</span>
            </button>
          </div> -->

          <div class="p-1">
            <data-list-search ref="search" v-model="searchQuery" />
          </div>
        </div>

        <div class="fieldset-grid my-4" :class="{ 'opacity-50': loading }">
          <div
            class="fieldset-card"
            v-for="fieldset in fieldsets"
            :key="fieldset.id"
            @click="showFieldset(fieldset)"
          >
            <div :class="`media-object fs-color-${fieldset.color}`">
              <div class="media-object--image">
                <fiedlset-dev-icon :name="fieldset.icon"></fiedlset-dev-icon>
              </div>
              <div class="flex-1">
                <p class="fieldset-card--title">
                  {{ fieldset.title }}
                </p>
                <p class="fieldset-card--subtitle">
                  {{ fieldset.subtitle }}
                </p>
              </div>
            </div>
            <div class="fieldset-card--footer">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-6 w-6 rounded-full"
                    :src="fieldset.author.avatar"
                    :alt="fieldset.author.name"
                  />
                </div>
                <div class="ml-2">
                  <p class="author-name">
                    {{ fieldset.author.name }}
                  </p>
                </div>
              </div>
              <div class="ml-2 flex items-baseline text-sm leading-5" v-if="fieldset.downloads">
                <div
                  class="self-center flex-shrink-0 inline-block text-opacity-75 hover:text-opacity-100"
                >
                  <svg
                    class="h-5 w-5 text-current fieldset-color--pop"
                    fill="currentColor"
                    height="21"
                    viewBox="0 0 21 21"
                    width="21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      transform="translate(3 3)"
                    >
                      <path d="m11.5 8.5-3.978 4-4.022-4" />
                      <path d="m7.522.521v11.979" />
                      <path
                        d="m.5 9v4.5c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5"
                      />
                    </g>
                  </svg>
                </div>
                <span class="sr-only">Downloads</span>
                <span class="ml-1">{{ fieldset.downloads }}</span>
              </div>
            </div>
          </div>
        </div>

        <data-list-pagination
          :resource-meta="meta"
          @page-selected="setPage"
        ></data-list-pagination>
      </div>
    </data-list>

    <fieldset-details v-if="showingFieldset" :fieldset="showingFieldset" />
  </div>
</template>

<style>
.fieldset-grid {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: dense;
}
</style>

<script>
export default {
  data() {
    return {
      initializing: true,
      loading: true,
      rows: [],
      meta: {},
      searchQuery: "",
      filter: "all",
      page: 1,
      showingFieldset: false,
      error: false,
      unlisted: [],
      ///
      loading: true,
      options: [],
      entry: null,
      icon: null,
    };
  },

  computed: {
    params() {
      return {
        page: this.page,
        q: this.searchQuery,
        installed: this.filter === "installed" ? 1 : 0,
      };
    },

    loaded() {
      return !this.loading && !this.error;
    },
  },
  watch: {
    page() {
      this.getFieldsets();
    },

    searchQuery() {
      this.page = 1;
      this.getFieldsets();
    },

    filter() {
      this.page = 1;
      this.getFieldsets();
    },

    loading: {
      immediate: true,
      handler(loading) {
        this.$progress.loading("fieldset-list", loading);
      },
    },
  },

  created() {
    this.rows = this.getFieldsets();
  },

  methods: {
    getFieldsets() {
      this.loading = true;

      this.$axios
        .get("/api/fieldsets", { params: this.params })
        .then((response) => {
          this.loading = false;
          this.initializing = false;
          this.rows = response.data.data;
          this.meta = response.data.meta;
          // if (this.showingfieldset) {
          //   this.refreshShowingfieldset();
          // }
        })
        .catch((e) => {
          console.log(e);
          this.loading = false;
          this.error = true;
          this.$toast.error(__("Something went wrong"));
        });
    },

    // getOptions() {
    //   fetch("/api/fieldsets").then((resp) => {
    //     resp.json().then((options) => {
    //       this.loading = false;
    //       this.options = options.map((o) => {
    //         const { handle, title, ...rest } = o;
    //         return {
    //         value: handle,
    //         label: title,
    //         ...rest
    //       }});

    //     });
    //   });
    // },

    showFieldset(fieldset) {
      this.showingFieldset = fieldset;
      window.scrollTo(0, 0);
    },
  },
};
</script>
