<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Animal</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <input type="file" Choose File />
            <br />

            <v-text-field
              label="Enter valid Animal"
              required
              v-model="AnimalName"
            ></v-text-field>

            <v-col cols="12" sm="6"> </v-col>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="addAnimal"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    AnimalName: "",
  }),

  methods: {
    ...mapActions("Anima", ["AddItems"]),

    addAnimal() {
      console.log("egtsrh");

      this.addItems({
        imgSrc: 154584,
        name: this.AnimalName,
        //   id: this.items.length + 1,
      });

      this.AnimalName = "";
    },

    ChooseFile() {
      alert("for testing");
    },
  },
};
</script>