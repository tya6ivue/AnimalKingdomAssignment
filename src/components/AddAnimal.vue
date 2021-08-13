<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            class="mr-90"
            mr="90"
          >
            Add Animals
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add New Animal</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <input
                type="file"
                Choose
                File
                accept="image/*"
                id="image"
                :key="fileInputKey"
                @change="uploadImage"
              />
              <br />

              <v-text-field
                label="Enter Animal Name"
                required
                v-model="AnimalName"
              ></v-text-field>

              <v-col cols="12" sm="6"> </v-col>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
            <v-btn color="blue darken-1" text @click="addAnimal"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <div class="text-center">
      <v-snackbar v-model="Added_card">
        {{ AddedText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="AddMessage = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    AnimalName: "",
    fileInputKey: 0,
    image: null,
    snackbar: "",
    AddedText: "Animal card is successfully added",
    Added_card: false,
  }),

  methods: {
    ...mapActions("Anima", ["AddItems"]),

    addAnimal() {
      if (this.image != null && this.AnimalName.trim().length > 0) {
        this.AddItems({
          name: this.AnimalName,
          imgSrc: this.image,
        });
        (this.dialog = false), this.clearInput();
        this.Added_card = true;
      } else {
        alert("Both field are required**");
      }
    },
    uploadImage(event) {
      event.preventDefault();
      const file = event.target.files[0];
      this.image = URL.createObjectURL(file);
      this.message = "";
    },

    close() {
      (this.dialog = false), this.clearInput();
    },
    clearInput() {
      this.fileInputKey++;
      this.AnimalName = "";
      this.image = null;
    },
  },
};
</script>