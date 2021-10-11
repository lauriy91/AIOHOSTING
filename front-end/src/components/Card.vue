<template>
  <v-container>
    <v-row  dense align-content="center">
      <v-col cols="4">
        <!--Imagen-->
        <v-card>
          <div>
            <v-img
              height="250"
              :src="url"
            ></v-img>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4" class="pa-2" align-self="center" id="lineaVertical">
        <!--Puntuacion-->
        <v-col>
          <v-row>
            <v-col cols="12" :class="nombrehotel">{{ titulo }}</v-col>
            <v-col cols="5" class="textobullet">Puntuación:{{numeroo}} </v-col>
            <v-rating
              :value="numeroo"
              color="purple"
              dense
              half-increments
              readonly
              size="14"
              class="block"
            ></v-rating>
          </v-row>
        </v-col>
        <v-col>
          <div class="textobullet">Ciudad:</div>
          
          <div>{{ ciudad }}</div>
        </v-col>
      </v-col>

      <!--Precio-->
      <v-col cols="4" class="pa-2" align-self="center">
        <v-col>
          <p class="precio">Precio:</p>
          <p class="preciohotel">{{precio}}</p>
          <v-col align-self="center" class="precio">

            <!--Botón-->
            <router-link v-if="!admin" to="/descripcionhostal" class="border color"> Ver detalles
            </router-link>
            <v-row>
              <v-col cols="6">
                 <formulario-boton  v-if="admin" tipodeboton="Editar" espacio="900px" :editar="true" :nom_alojamiento="titulo" :itemselec="tipo" :ciudad="ciudad" :descripcion="descripcion" :escenario="escenario" :id="id" :puntuacion="numeroo" :precio="precio" :tiempo="tiempo"></formulario-boton>
              </v-col>
             <v-col cols="6">
               <formulario-boton :id="id" espacio="400px" v-if="admin" tipodeboton="Eliminar" :editar="false"></formulario-boton>
             </v-col>
            
            </v-row>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormularioBoton from './Formulario-boton.vue';
export default {
  data() {
    return {
      imagen:[this.url]
    };
  },
  props: {
    numeroo: Number,
    titulo: String,
    ciudad: String,
    url: String,
    nombrehotel: String,
    admin: Boolean,
    tiempo: String,
    precio: Number,
    escenario: Array,
    tipo:String,
    descripcion:String,
    id: String,
  },
  methods:{

  },
  components:{
FormularioBoton
  },
};

</script>
<style scoped>
.block {
  display: block;
  width: 58.3%;
  padding: 12px;
}

.titulo {
  font-size: 40px !important;
  color: darkcyan;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.textobullet {
  font-size: 24px !important;
  color: black;
  font-weight: bold;
}

.precio {
  font-size: 20px;
  font-weight: bold;
  margin: 0 !important;
  padding: 0;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: black;
}
.nombrehotel {
  font-size: 30px;
  color: darkcyan;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
}
.nombrehotel2 {
  font-size: 30px;
  color: purple;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
}
#lineaVertical {
  border-right: 1px solid black;
}

.preciohotel {
  font-size: 35px;
  color:purple;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  font-weight: bold;
}

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
