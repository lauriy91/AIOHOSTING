<template>
    <div id="pie_pagina">
      <v-footer>
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
  
            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

        </v-card>
      </v-footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#pie_pagina{
  width: 100vmax;
  margin: 0%;
}
</style>