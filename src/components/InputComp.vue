 
<template>
  <div>
          <!-- <AddAnimal /> -->
    <v-app id="inspire">
      <v-main>
        <v-container>
          <AddAnimal></AddAnimal>
    <!-- <v-btn class="float-right" depressed color="error" @click="addAnimal"> Create </v-btn> -->
    
       <p class="font-italic ma-10">
    Animals of the kingdom
    </p>
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
import AddAnimal from './AddAnimal.vue'
import { mapActions, mapState } from "vuex";
export default {
  name: "inputComp",
  components: {

    AddAnimal,
  },

  computed: {
    ...mapState('Anima', ["categories"]),
  },

methods: {
  ...mapActions('Anima', ['AddItems']),
  ...mapActions('Anima', ['DeleteItems']),

  addAnimal() {
    alert("Testing on the wAY")
    this.AddItems ({
    })
  },
deleteAnimal() {
  alert("srgtrh")
  this.DeleteItems ({

  })

}
  
}

};
</script>