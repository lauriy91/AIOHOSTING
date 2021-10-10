<template>

  <div class= "contenedor_secundario">

    <!--Contenedor botones de la parte superior derecha-->
    <div class="buscador_idioma">
      <busqueda-home />
    </div>

    <!-- CONTENEDOR IMAGEN DE FONDO -->
    <div class="contFondo">
      <img src="https://i.ibb.co/r4YGF3V/img-intro.png" />
    </div>

  </div>

</template>

<script>
import BusquedaHome from "../components/BusquedaHome.vue";
export default {
  components: {
    BusquedaHome,
  },
};
</script>

<style>

.contenedor_secundario{
  display: flex;
}

img{
  margin: -4% 0% 3% 14%;
  width: 130%;
}

.buscador_idioma{
  padding-top: 5%;
}

</style>