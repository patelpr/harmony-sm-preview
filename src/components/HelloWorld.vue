<template>
  <v-container>
    <v-row>
      <v-col md="3">helo</v-col>
      <v-col md="3">adsf</v-col>
      <v-col md="3">adsf</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    console.log(this.image);
  },
  props: {
    image: Blob,
  },
  data: () => ({}),
};
</script>
