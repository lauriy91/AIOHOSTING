<template>
  <div class="cow">
    <banner-home :ver="busqueda"></banner-home>
    
    <h1 class="coworking">Panel Admin</h1>
    <div class="container">
<<<<<<< HEAD
      <v-row v-for="item in coliving" :key="item.id">
      <Card nombrehotel="nombrehotel" :url="item.url" :titulo="item.titulo" :numero="item.numero" :ciudad="item.ciudad" class="lugar" :admin="true"></Card>
=======
      <v-row v-for="item in alojamiento" :key="item.id">
      <Card nombrehotel="nombrehotel2" :url="item.imagen" :precio="item.precio" :tiempo="item.tiempo_estadia" :titulo="item.nombre" :escenario="item.escenario" :numeroo="item.puntuacion" :ciudad="item.ciudad" :tipo="item.tipo" :id="item._id" :descripcion="item.descripcion" class="lugar" :admin="true"></Card>
>>>>>>> aafee9ddb690a577601a88ed837a37511a48af67
      </v-row>
    </div>
    <footer-descripcion/>

  </div>
</template>

<script>
import Formularioboton from "../components/Formulario-boton.vue";
import BannerHome from "../components/BannerHome.vue";
import Card from "../components/Card.vue";
import FooterDescripcion from '../components/FooterDescripcion.vue';
import axios from 'axios';
export default {
    data(){
    return{
      busqueda:true,
      alojamiento:[]
    }
  },
  components: {
    Card,
    FooterDescripcion,
    BannerHome,
    Formularioboton,
   
  },
  mounted(){
    axios.get('http://localhost:3000/alojamientos').then(res =>{
      this.alojamiento = res.data

    }).catch(err =>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
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