<template>
  <!---->
  <div>
    <banner-descripcion />
    <v-container>
      <cuerpo-detalles />
      <footer-descripcion />
    </v-container>
  </div>
</template>

<script>
import BannerDescripcion from "../components/BannerDescripcion.vue";
import CuerpoDetalles from "../components/CuerpoDetalles.vue";
import FooterDescripcion from "../components/FooterDescripcion.vue";

export default {
  components: {
    BannerDescripcion,
    CuerpoDetalles,
    FooterDescripcion,
  },
};
</script>
<style></style>
