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
          <p class="precio">Precio: 1 día</p>
          <p class="preciohotel">$1000,000</p>
          <v-col align-self="center" class="precio">

            <!--Botón-->
            <router-link to="/descripcionhostal">
            <a class="border color"> Ver detalles </a>
            </router-link>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    numeroo: Number,
    titulo: String,
    ciudad: String,
    url: String,
    nombrehotel: String,
  },
  methods:{

  }
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
