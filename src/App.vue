<template>
  <div>
    <v-app-bar color="orange">
      <v-spacer></v-spacer>
      <v-file-input
        @change="vistaPrevia"
        v-model="image"
        multiple
      ></v-file-input>
      <v-spacer></v-spacer>

      <v-btn icon @click="clear">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-row v-for="u in url" :key="u">
        <v-col>
          <p>400px</p>
          <v-img :src="u.src" max-width="400px" contain />
        </v-col>
        <v-col>
          <p>600px</p>

          <v-img :src="u.src" max-width="600px" contain />
        </v-col>
        <!-- <v-col>
          <p>800px</p>

          <v-img :src="u.src" max-width="800px" contain />
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: [],
    image: null,
  }),

  methods: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#fileInput {
  display: none;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
