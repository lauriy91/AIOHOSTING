<template>
  <div class="cow">
    <BannerDescripcion :ver="busqueda"></BannerDescripcion>
    
    <h1 class="coworking">Panel Admin</h1>
    <div class="container">
      <v-row v-for="item in alojamiento" :key="item.id">
      <Card nombrehotel="nombrehotel2" :url="item.imagen" :precio="item.precio" :tiempo="item.tiempo_estadia" :titulo="item.nombre" :escenario="item.escenario" :numeroo="item.puntuacion" :ciudad="item.ciudad" :tipo="item.tipo" :id="item._id" :descripcion="item.descripcion" class="lugar" :admin="true"></Card>
      </v-row>
    </div>
    <footer-descripcion/>

  </div>
</template>

<script>
import Formularioboton from "../components/Formulario-boton.vue";
import BannerDescripcion from "../components/BannerDescripcion.vue";
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
    BannerDescripcion,
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