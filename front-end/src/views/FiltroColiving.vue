<template>
  <div>
    <BannerDescripcion :ver="busqueda"></BannerDescripcion>
    <h1 class="coworking">Coliving</h1>
    <div class="container">
      <v-row v-for="item in coliving" :key="item.id">
        <Card
          nombrehotel="nombrehotel"
          :url="item.imagen" :precio="item.precio" :tiempo="item.tiempo_estadia" :titulo="item.nombre" :escenario="item.escenario" :numeroo="item.puntuacion" :ciudad="item.ciudad" :tipo="item.tipo" :id="item._id" :descripcion="item.descripcion" class="lugar"
        ></Card>
      </v-row>
    </div>
    <footer-descripcion />
  </div>
</template>
<script>
import BannerDescripcion from "../components/BannerDescripcion.vue";
import Card from "../components/Card.vue";
import FooterDescripcion from "../components/FooterDescripcion.vue";
import axios from "axios";
export default {
  data() {
    return {
      busqueda: true,
      coliving: [
        
      ],
    };
  },
  components: {
    Card,
    BannerDescripcion,
    FooterDescripcion,
  },
  mounted(){axios.get("https://aiohosting.herokuapp.com/alojamientos/tipo/Coliving").then(res=>{this.coliving=res.data.data}).catch(error=>{console.log (error)})}
};
</script>
<style scoped>
.coworking {
  font-size: 60px !important;
  color: darkcyan;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-left: 4.7rem;
}
.lugar {
  font-size: 24px;
}
</style>
