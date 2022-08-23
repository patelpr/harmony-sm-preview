<template>
  <v-app>
    <v-app-bar id="inspire" app dark color="#222c64">
      <v-toolbar-side-icon>
        <a href="https://www.harmonygroupatl.com">
          <v-img src="@/assets/logo.png" height="50px" contain> </v-img>
        </a>
      </v-toolbar-side-icon>
    </v-app-bar>
    <v-main>
      <v-container v-if="url.length == 0">
        <v-combobox
          v-model="sizes"
          :items="items"
          label="SELECT DIFFERENT IMAGE WIDTHS HERE"
          multiple
          chips
          @blur="sort"
        >
        </v-combobox>
        <v-file-input
          @change="vistaPrevia"
          v-model="image"
          multiple
          label="CLICK HERE TO SELECT IMAGES TO CHECK"
        ></v-file-input>
      </v-container>
      <v-container v-else>
        <v-row>
          <v-col>
            <v-btn fab color="red" icon @click="clear"> CLEAR </v-btn>
          </v-col>
        </v-row>
        <v-row v-for="u in url" :key="u">
          <v-col v-for="s in sizes" :key="s" cols="12">
            <v-img :src="u.src" :max-width="s" contain />
          </v-col>
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    url: [],
    image: null,
    sizes: [400, 600],
    items: [200, 300, 400, 500, 600, 700, 800, 900, 1000],
  }),

  methods: {
    sort() {
      this.sizes.sort();
    },
    clear() {
      this.url = [];
      this.image = null;
    },
    vistaPrevia() {
      this.image.forEach((element) => {
        this.url.push({ src: URL.createObjectURL(element) });
      });
    },
  },
};
</script>
