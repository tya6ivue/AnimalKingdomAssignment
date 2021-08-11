 
<template>
  <div>
    <v-app id="inspire">
      <v-main>
        <v-container>
    <v-btn class="ma-16" depressed color="error" @click="addAnimal"> Create </v-btn>
          <v-row>
            <v-col
              v-for="(animal, index) in categories"
              :key="index"
              cols="4"
            >
              <v-card >

                <v-img
                 :src="animal.imgSrc"
                 class="width:50px"
                  
                >
                  <v-btn class="float-right" @click="deleteAnimal"> X </v-btn>
                </v-img>
                <v-card-title>
            {{animal.name}}
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
import { mapActions, mapState } from "vuex";
export default {
  name: "inputComp",
  computed: {
    ...mapState('Anima', ["categories"]),
  },

methods: {
  ...mapActions('')
}

};
</script>