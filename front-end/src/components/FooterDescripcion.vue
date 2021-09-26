<template>
  <v-footer
    white
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="boton"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook', 
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>
.boton {
  display: flex;
  color: grey !important;
 
}
</style>