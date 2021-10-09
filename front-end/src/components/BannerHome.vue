<template>

  <!--CONTENEDOR BANNER-->
  <div class="banner">
    <div class="col s8">

      <router-link to="/Filtrocoworking">
        <span id="textoCoworking"> Coworking </span>
      </router-link>

      <span id="separador">|</span>

      <router-link to="/Filtrocoliving">
        <span id="textoColiving">Coliving</span>
      </router-link>

    </div>
  </div>
  <!--CIERRO CONTENEDOR BANNER-->

</template>

<script>
export default {};
</script>

<style>

/*Estilos para el banner principal*/

.banner {
  padding: 1%;
  background: linear-gradient(30deg, rgba(63, 5, 156, 0.925), rgb(56, 42, 77));
}

/*Estilos para el texto del banner principal*/

#textoCoworking {
  padding-left: 7% ;
  font-size: 1rem;
  color: white;
}
#separador {
  margin: 15px 70px 15px 70px;
  font-size: 1.2rem;
  color: white;
}
#textoColiving {
  font-size: 1rem;
  color: white;
}

</style>