<template>
  <v-app>
    <v-main>
      <InputComp />

    </v-main>
  </v-app>
</template>

<script>
import InputComp from "./components/InputComp";


export default {
  name: "App",

  components: {
    InputComp,
    
  },

  data: () => ({
    //
  }),
};
</script>
