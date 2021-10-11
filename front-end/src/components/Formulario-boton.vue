<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent :max-width="espacio">
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on" class="border color"> {{ tipodeboton }} </a>
      </template>

      <!-- ESTE ES EL FORMULARIO PARA EDITAR -->
      <v-card v-if="editar">
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
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="editarAlojamiento">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="!editar">
        <v-card-title class="text-h5 grey lighten-2"> Alerta! </v-card-title>

        <v-card-text>
          ¿Esta seguro que desea eliminar el alojamiento?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="eliminar">Eliminar</v-btn>
          <v-btn color="primary" text @click="dialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    imagen: [],
    search: "Playa",
    itemscambiado: "",
    item: ["Coworking", "Coliving"],
  }),
  props: {
    tipodeboton: String,
    editar: Boolean,
    tiempo: String,
    espacio: String,
    nom_alojamiento: String,
    itemselec: String,
    precio: Number,
    puntuacion: Number,
    descripcion: String,
    ciudad: String,
    escenario: Array,
    id: String,
  },
  methods: {
    editarAlojamiento() {
      let url = "http://localhost:3000/alojamientos/" + this.id;
      console.log(url);
      axios
        .put(url)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.dialog = false;
    },
    eliminar() {
      let url2 = "http://localhost:3000/alojamientos/" + this.id;
      console.log(url2);
      axios
        .delete(url2)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.dialog = false;
    },
  },
};
</script>

<style>
.color {
  border-radius: 2px;
  padding: 10px;
  color: aliceblue !important;
  background: linear-gradient(70deg, rgba(47, 1, 255, 0.678), rgb(170, 3, 248));
  text-decoration: none;
  text-align: center;
}

.boton {
  display: block;
  width: 100%;
  align-items: center;
  align-self: center;
}
</style>