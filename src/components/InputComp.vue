 
<template>
  <div>
    <v-app id="inspire">
      <v-main>
        <v-container>
          <v-row class="text-center mb-10 mt-10">
            <v-col cols="12" sm="5" md="4" lg="3">
              <h2 class="text">Animals of the Kingdom</h2>
            </v-col>
            <v-col cols="12" sm="7" md="8" lg="9" class="">
              <AddAnimal></AddAnimal>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="4"
              lg="3"
              class="d-flex justify-center"
              v-for="(animal, index) in categories"
              :key="index"
            >
              <v-card width="250" margin="auto">
                <v-img :src="animal.imgSrc" height="250">
                  <v-btn class="float-right" text @click="deleteAnimal(index)">
                    X
                  </v-btn>
                </v-img>
                <v-card-title>
                  {{ animal.name }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import AddAnimal from "./AddAnimal.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "inputComp",
  components: {
    AddAnimal,
  },

  computed: {
    ...mapState("Anima", ["categories"]),
  },

  methods: {
    ...mapActions("Anima", ["AddItems"]),

    addAnimal() {
      this.AddItems({});
    },
    deleteAnimal(index) {
      this.categories.splice(index, 1);
    },
  },
};
</script>
