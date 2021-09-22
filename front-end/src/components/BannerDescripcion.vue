<template>
    <!--Barra superior - Banner-->

    <!--Logo y botones de español y buscar-->
    <div class="nav">

        <!--Logo-->
        <img class="logo" src="https://i.ibb.co/6NjgxCg/logo.png" alt="Logo" />
        <div class="contenedor_nav">
        <div class="b_busqueda">
            <span>Español</span>
            <input style="color: white;" type="text" icon="mdi-magnify" placeholder="Buscar" />
        </div>

        <!--Botones de home y regresar-->
        <div class="nav_pag">
            <router-link to="/">
            <span class="texto_botones">Home</span>
            </router-link>
            <router-link to="/filtrocoliving">
            <span class="texto_botones">Regresar</span>
            </router-link>
        </div>
        </div>
        
        <!--Cierre Barra superior - Banner-->
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