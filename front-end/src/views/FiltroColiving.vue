<template>
  <div>
    <v-app-bar id="banner" prominent>
    <!--Logo-->
    <div id="contenedor_logo">
    <router-link to="/">
    <img id="logo" src="https://i.ibb.co/6NjgxCg/logo.png" alt="Logo" />
    </router-link>
    </div>
    <v-spacer></v-spacer>
    <!--Contenedor botones de la parte superior izquierda-->
    <div id="botones_banner">
    <!--Botón idiomas-->
    <v-btn id="boton_idiomas"
      rounded dark>
      Español
    </v-btn>
    <!--Buscador-->
    <div id="buscador">
      <v-btn id = "btn_buscar"
        rounded dark> 
        Buscar
      </v-btn>
    </div>
    <div>
      <br>
      <br>
      <label id="texto_moneda"></label>
    </div>
    <!--Cierre contenedor botones de la parte superior izquierda-->
    </div>
    <!--Cierre banner-->
</v-app-bar>
    <h1 class="coworking">Coliving</h1>
    <div class="container">
      <v-row v-for="item in coliving" :key="item.id">
      <Card nombrehotel="nombrehotel" :url="item.url" :titulo="item.titulo" :numeroo="item.numero" :ciudad="item.ciudad" class="lugar"></Card>
      </v-row>
    </div>
    <footer-descripcion/>
  </div>
</template>
<script>
import BannerDescripcion from "../components/BannerDescripcion.vue";
import Card from "../components/Card.vue";
import FooterDescripcion from '../components/FooterDescripcion.vue';
export default {
  data(){
    return{
      busqueda:true,
      coliving:[
        {
        id: 1,
        url:"https://i.ibb.co/X7s3Srm/detallada-1.jpg",
        titulo: "Hotel Costa",
        ciudad: "San Andrés y Providencia",
        numero:4.3
        },
        {
        id: 2,
        url:"https://i.ibb.co/9qzhb34/Close-up-of-young-group-of-startapers-sitting-in-library-making-research-about-future-tem-project-lo.jpg",
        titulo: "Hotel Tequendama",
        ciudad: "Bogotá",
        numero:3.8
        },
        {
        id: 3,
        url:"https://i.ibb.co/F89nC4p/Young-female-executive-explaines-new-strategy-to-blonde-employee-in-glasses-and-smiling-Indoor-portr.jpg",
        titulo: "Hotel el Dorado",
        ciudad: "Guatavita",
        numero:4.7
        },
      ]
    }
  },
  components: {
  Card,
  BannerDescripcion,
  FooterDescripcion,
  },
};
</script>
<style scoped>
.coworking {
  font-size: 60px !important;
  color: darkcyan;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-left:11rem;
}
.lugar{
  font-size: 24px;
  
}
</style>
