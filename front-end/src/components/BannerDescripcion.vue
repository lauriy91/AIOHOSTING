<template>
  <div>
    <v-app-bar id="banner" prominent>
    <!--Logo-->
    <div id="contenedor_logo">
    <router-link to="/">
    <img id="logo" src="https://i.ibb.co/6NjgxCg/logo.png" alt="Logo" />
    </router-link>
    </div>
    <v-spacer></v-spacer>
    <!--Contenedor botones de la parte superior izquierda-->
    <div id="botones_banner">
    <!--Botón idiomas-->
    <v-btn id="boton_idiomas"
      rounded dark>
      Español
    </v-btn>
    <!--Buscador-->
    <div id="buscador">
      <v-btn id = "btn_buscar"
        rounded dark> 
        Buscar
      </v-btn>
    </div>
    <div>
      <br>
      <br>
      <label id="texto_moneda"></label>
    </div>
    <!--Cierre contenedor botones de la parte superior izquierda-->
    </div>
    <!--Cierre banner-->
</v-app-bar>
  
  </div>
</template>

    <script>
export default {
    name: "BannerDescripcion"
};
</script>

    <style>
    /*Estilos para el banner principal*/
    .nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 120px;
    background: linear-gradient(to right, #3d4484, #b853db);
    }
    .logo {
    height: 8rem;
    background-color: white;
    margin-left: 1rem;
    }
    .b_busqueda {
    padding: 10px;
    color: white;
    }
    .b_busqueda span {
    padding: 5px;
    border-right: 1px solid white;
    }
    .b_busqueda input {
    border: 1px solid white;
    padding: 6px;
    border-radius: 10px;
    margin-left: 5px;
    width: 120px;
    }
    .nav_pag {
    padding: 10px;
    display: flex;
    }
    .nav_pag a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    color: white;
    padding: 0 10px;
    }

    .texto_botones {
    color: white;
    }

    /*Estilos para el contenedor del logo*/
    #contenedor_logo {
    background-color: white;
    }

    ::placeholder { color: white; }

</style>