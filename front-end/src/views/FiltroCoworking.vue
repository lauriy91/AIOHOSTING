<template>
<div class="gran_contenedor">

<div class="cow">
    <BannerDescripcion :ver="busqueda"></BannerDescripcion>
    
    <h1 class="coworking">Coworking</h1>
    <div class="container">
      <v-row v-for="item in coliving" :key="item.id">
      <Card
          nombrehotel="nombrehotel"
          :url="item.imagen" :precio="item.precio" :tiempo="item.tiempo_estadia" :titulo="item.nombre" :escenario="item.escenario" :numeroo="item.puntuacion" :ciudad="item.ciudad" :tipo="item.tipo" :id="item._id" :descripcion="item.descripcion" class="lugar"
        ></Card>
      </v-row>
    </div>
    <footer-descripcion/>
  </div>

</div>
</template>

<script>
import Formularioboton from "../components/Formulario-boton.vue";
import BannerDescripcion from "../components/BannerDescripcion.vue";
import Card from "../components/Card.vue";
import FooterDescripcion from '../components/FooterDescripcion.vue';
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
  mounted(){axios.get("https://aiohosting.herokuapp.com/alojamientos/tipo/Coworking").then(res=>{this.coliving=res.data.data}).catch(error=>{console.log (error)})}
};

</script>

<style scoped>

.gran_contenedor{
  width: 100%;
}

.coworking {
  font-size: 60px !important;
  color: purple;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-inline-start: 4.7rem;
}
.lugar{
  font-size: 24px;
}

</style>