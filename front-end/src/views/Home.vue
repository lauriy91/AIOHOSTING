<template>

  <!-- CONTENEDOR PRINCIPAL -->
  <div class="contenedor">

    <!-- CONTENEDOR IZQUIERDO -->
    <div class="contenedor-izquierdo">

    <!--Logo de la Aplicación -->
    <div>
      <img class= "logo" src="https://i.ibb.co/6NjgxCg/logo.png" />
    </div>

    <!--Contendedor del Banner -->
    <div class="bannerhome">
      <banner-home />
    </div>

    <!--Contenedor area de texto -->
    <div class="texto-ppal">
      <textoppal-home />
    </div>

    </div>
    <!-- CIERRE CONTENEDOR IZQUIERDO -->

    <!-- CONTENEDOR DERECHO -->
    <div class="contenedor-derecho">

    <!--Contenedor imagen del home -->
    <div class="secundario">
      <imagen-home />
    </div>

    <!--Contenedor del footer-->
    <div class="footer">
      <footer-descripcion />
    </div>

    </div>
    <!-- CIERRE CONTENEDOR DERECHO -->
  </div>
  <!-- CIERRE CONTENEDOR PRINCIPAL -->
</template>

<!-- SCRIPT -->
<script>
/**Importaciones de componentes **/
import BannerHome from "../components/BannerHome.vue";
import FooterDescripcion from '../components/FooterDescripcion.vue';
import ImagenHome from '../components/ImagenHome.vue';
import TextoppalHome from '../components/TextoppalHome.vue';


export default {
  components: {
    BannerHome,
    ImagenHome,
    FooterDescripcion,
    TextoppalHome,
  },
  data: () => {
    return {};
  },
  methods: {
    login() {
      console.log("Cargando...");
      this.$router.push("/home");
    },
  },
};
</script>


<!-- SECCIÓN ESTILOS -->
<style>


/*Estilo del Logo*/
.logo { 
  position: absolute;
  margin-top: 0.5%;
  margin-left: 2%;
}

/*Estilo del Banner */
.bannerhome{
  position: absolute;
  margin-top: 11%;
  width: 100%;
}

/*Estilo del texto del Home*/
.texto-ppal{
  position: absolute;
  margin: 20% 50% 0% 3%;
  width: 50%;
}

/*Estilo imagen del Home*/
.secundario{
  position: absolute;
  padding: 0% 0% 3% 42%;
  margin-left: 5%;
}

/*Estilo del Footer*/
.footer{
  position: absolute;
  padding-top: 40%;
  margin-left: 85%;
}

</style>
