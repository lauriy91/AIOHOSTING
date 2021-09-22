<template>
  <div class="coworking">
    <h1>Coworking</h1>
    <div class="container">
      <v-row>
      <Card titulo="Hostal Wiwa" numeroo= 4.8 ciudad="Pereira"></Card>
      </v-row>
      <v-row>
      <Card titulo="Hotel Bogotá" numeroo= 3.1 ciudad="Bogotá"></Card>
      </v-row>
      <v-row>
      <Card titulo="Hostal Americas" numeroo= 3.5 ciudad="Medellín"></Card>
      </v-row>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,

  },
};
</script>

<style>
.coworking {
  font-size: 30px !important;
  color: darkcyan;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}


</style>
