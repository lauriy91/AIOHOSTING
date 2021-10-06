<template>
<div class="gran_contenedor">

<div class="cow">
    <BannerDescripcion :ver="busqueda"></BannerDescripcion>
    
    <h1 class="coworking">Coworking</h1>
    <div class="container">
      <v-row v-for="item in coliving" :key="item.id">
      <Card nombrehotel="nombrehotel" :url="item.url" :titulo="item.titulo" :numeroo="item.numero" :ciudad="item.ciudad" class="lugar" :admin="false"></Card>
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
export default {
  data(){
    return{
      busqueda:true,
      coliving:[
        {
        id: 1,
        url:"https://i.ibb.co/9nWW87V/Young-man-with-cup-of-tea-looking-at-data-on-laptop-display-being-pointed-at-by-one-of-colleagues-at.jpg",
        titulo: "Hotel Wiwa",
        ciudad: "Medellín",
        numero:4.3 
        },
        {
        id: 2,
        url:"https://i.ibb.co/nbpXn8w/Startup-business-teamwork-concept-Group-of-perspective-young-people-on-meeting-in-big-modern-library.jpg",
        titulo: "Hotel Bogotá",
        ciudad: "Bogotá",
        numero:3.8
        },
        {
        id: 3,
        url:"https://i.ibb.co/x2Z8qsf/Creative-group-working-on-startup-using-laptops-in-modern-co-working-with-potted-plant-Business-coll.jpg",
        titulo: "Hostal Americas",
        ciudad: "Pasto",
        numero:4.7
        },
      ]
    }
  },
  components: {
    Card,
    FooterDescripcion,
    BannerDescripcion,
    Formularioboton,
  },
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
    margin-inline-start: 11rem;
}
.lugar{
  font-size: 24px;
}

</style>