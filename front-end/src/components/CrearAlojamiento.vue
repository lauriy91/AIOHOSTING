<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on" class="border color"> Crear alojamiento </a>
      </template>

      <!-- ESTE ES EL FORMULARIO PARA EDITAR -->
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar Alojamiento</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8" md="9">
                <v-text-field
                  v-model="nom_alojamiento"
                  label="Nombre del Hotel"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-combobox
                  label="Tipo de alojamiento"
                  outlined
                  v-model="itemscambiado"
                  :value="itemselec"
                  :items="item"
                ></v-combobox>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  label="Ciudad"
                  v-model="ciudad"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-combobox
                  v-model="escenario"
                  :search-input.sync="search"
                  hide-selected
                  hint="Maximo 5 escenarios"
                  label="Escenarios"
                  outlined
                  multiple
                  persistent-hint
                  small-chips
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          Sin resultados "<strong>{{ search }}</strong
                          >". Presiona <kbd>enter</kbd> para crear uno nuevo.
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-combobox>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  label="Precio"
                  v-model="precio"
                  prefix="$"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  label="Tiempo de estadia"
                  v-model="tiempo"
                  hint="Cantidad días"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  label="Puntuacion"
                  v-model="puntuacion"
                  hint="Mínimo 1 y máximo 5"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  name="Descripcion"
                  v-model="descripcion"
                  label="Descripcion del alojamiento"
                  auto-grow
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  v-model="imagen"
                  label="Imagen"
                  outlined
                  dense
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
           <v-btn color="blue darken-1" text @click="crearAlojamiento">
            Crear
          </v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import axios from "axios"
export default {

data:() => ({
    tiempo: "",
    espacio: "",
    nom_alojamiento: "",
    itemselec: "",
    precio: 0,
    puntuacion: 0,
    descripcion: "",
    ciudad: "",
    escenario: [],
    dialog:false,
    imagen: [],
    search: "Playa",
    itemscambiado: "",
    item: ["Coworking", "Coliving"],
          }),

           methods: {
    crearAlojamiento() {
      let url = "https://aiohosting.herokuapp.com/alojamientos/";
      let datos= {
    nombre: this.nom_alojamiento,
    tipo: this.tipo,
    puntuacion: this.puntuacion,
    ciudad: this.ciudad,
    escenario: this.escenario,
    precio: this.precio,
    tiempo_estadia: this.tiempo,
    descripcion: this.descripcion,
}
      
      console.log(url);
      axios
        .post(url, datos)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.dialog = false;
    },
      }
}
</script>

<style>

</style>
