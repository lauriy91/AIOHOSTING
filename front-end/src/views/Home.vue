<template>

  <!-- CONTENEDOR PRINCIPAL -->
  <div class="contenedor">

    <!-- CONTENEDOR IZQUIERDO -->
    <div class="contenedor-izquierdo">

    <!--Logo de la Aplicación -->
    <div>
      <img class= "logo" src="https://i.ibb.co/6NjgxCg/logo.png" />
    </div>

<<<<<<< HEAD
    <!--Contendedor del Banner -->
    <div class="bannerhome">
      <banner-home />
=======
    <!--CONTENEDOR DE BOTONES COWORKING - COLIVING-->
    <div class="row" style="height:100px">
      <div class="col s8" style="height:100%">
        <div class="barraMorada">
          <v-bottom-navigation id="coco" v-model="value" dark>
            <router-link to="/Filtrocoworking">
              <span id="textoCoworking"> Coworking </span>
            </router-link>

            <div id="separador">
              <span>|</span>
            </div>

            <router-link to="/Filtrocoliving">
              <span id="textoColiving">Coliving</span>
            </router-link>
          </v-bottom-navigation>
        </div>

        <!-- CONTENEDOR TEXTO -->

        <div id="app">
          <v-app id="inspire">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <div class="tabla">
                      <h1 id="titulo">
                        <b
                          >QUIENES <br />
                          SOMOS</b
                        >
                      </h1>
                      <br />
                      <p id="parrafo1">
                        Adipliscing elit, sed diam nonummy nibh euismod
                        tincidunt utlaoreet dolore
                      </p>
                      <p id="parrafo2">
                        Magno alquam valutpat. Ut uisi enim ad inimi venion,
                        quis nostitud xelt talingt hgamert loobit abants
                        serpendi ses bolitare vastabuam jertirs cfisrm, cell
                        illum dolore.
                      </p>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-app>
        </div>
      </div>
>>>>>>> aafee9ddb690a577601a88ed837a37511a48af67
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
  height: 100%;
  position: absolute;
  padding: 0% 0% 3% 42%;
}

/*Estilo del Footer*/
.footer{
  position: absolute;
  padding-top: 40%;
  margin-left: 85%;
}

<<<<<<< HEAD
</style>
=======
#app {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  width: 100%;
}

.text-left {
  font-size: 3rem;
}

.tabla {
  width: 40%;
  text-align: justify;
}

@media (width: 100%) {
  .contenedor {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
>>>>>>> aafee9ddb690a577601a88ed837a37511a48af67
