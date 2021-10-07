<template>
  <!--Barra superior - Banner-->
  <!--Logo y botones de español y buscar-->
  <div class="nav">
    <!--Logo-->
    <div class="container_logo">
      <img class="logo" src="https://i.ibb.co/6NjgxCg/logo.png" alt="Logo" />
    </div>
    <Filtros v-if="ver"></Filtros>
    <div class="contenedor_general">
      <div class="contenedor_nav">
        <Busqueda></Busqueda>
        <div class="nav_pag">
          <router-link to="/">
            <span class="texto_botones">Home</span>
          </router-link>
          <router-link to="/filtrocoworking">
            <span class="texto_botones">Coworking</span>
          </router-link>
          <router-link to="/filtrocoliving">
            <span class="texto_botones">Coliving</span>
          </router-link>
          <router-link to="/PanelAdmin">
            <span class="texto_botones">Administrador</span>
          </router-link>
        </div>
      </div>
      <!--Botones de home y regresar-->
    </div>
    <!--Cierre Barra superior - Banner-->
  </div>
</template>

<script>
import Busqueda from "./Busqueda.vue";
export default {
  components: { Busqueda},
  name: "BannerDescripcion",
  props: {
    ver: Boolean,
  },
};
</script>

<style>
/*Estilos para el banner principal*/
.nav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 138px;
  background: linear-gradient(to right, #3d4484, #b853db);
}
.container_logo {
  margin-left: 1rem;
  width: auto;
  height: 100%;
}
.logo {
  display: block;
  height: 120px;
  width: 120px;
  padding: 2px 5px 5px;
  background-color: white;
}
.contenedor_general {
  padding: 1rem;
}
.nav_pag {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
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
</style>