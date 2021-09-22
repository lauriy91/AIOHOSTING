<template>
  <!-- CONTENEDOR GRID IZQUIERDO -->

  <v-container class="contenedor">

    <!--LOGO DE LA APLICACIÓN-->
    <div class= "logo">
    <img id="logo" style= "width:100px" src="https://i.ibb.co/2ystntY/logoALO.jpg" />
    </div>

    <!--CONTENEDOR DE BOTONES COWORKING - COLIVING-->
    <div class="row" style="height: 0px">
      <div class="col s8">
      <div class="barraMorada">
        <v-bottom-navigation id="coco" v-model="value" dark>
          <router-link to="/Filtrocoworking">
            <v-btn id="texto_coworking" text> Coworking </v-btn>
          </router-link>

          <router-link to="/Filtrocoliving">
            <v-btn id="texto_coliving" text>
              <span>Coliving</span>
            </v-btn>
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
                    <h1 id="titulo">QUIENES SOMOS</h1><br>
                    <p id="parrafo1">Adipliscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore</p>
                    <p id="parrafo2">Magno alquam valutpat. Ut uisi enim ad inimi venion, quis nostitud
            xelt talingt hgamert loobit abants serpendi ses bolitare vastabuam
            jertirs cfisrm, cell illum dolore.</p>
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
    </div>

    <!-- CONTENEDOR GRID DERECHO -->

    <!-- CONTENEDOR IMAGEN DE FONDO -->
      <div class="contFondo">
        <img src="https://i.ibb.co/r4YGF3V/img-intro.png" />
      </div>

    <!--Contenedor botones de la parte superior izquierda-->
    <div class="Buscador_Idioma">
    <!--Botón idiomas-->
    
    <v-btn id="btn_idiomas"
      rounded dark>
      Español
    </v-btn>

    <!--Buscador-->
      <v-btn id = "btn_buscar"
        rounded dark> 
        Buscar
      </v-btn>

    <div>
      <footer-descripcion/>
    </div>

    </div>

  </v-container>
</template>
 

 <!-- SCRIPT -->
<script>
import FooterDescripcion from '../components/FooterDescripcion.vue';
export default {
  components: {
    FooterDescripcion,    
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
/*ESTILO BANNER QUE CONTIENE LOS BOTONES DE COWORKING Y COLIVING */
#coco {
  margin-top: 140px;
  height: 70px;
  background: linear-gradient(
    70deg,
    rgba(63, 5, 156, 0.925),
    rgb(56, 42, 77));
  font-size: 2em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 60%;
}

/*ESTILO LOGO */
.logo {
  position: absolute;
  width: 10px;
  margin-bottom: 20px;
}

/*ESTILO DE TODO EL TEXTO DEL HOME (TITULO Y PARRAFOS) */
.textoHome {
  text-align: justify;
}

/*ESTILO TITUL0*/
#titulo {
  margin-top: 10px;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: rgb(51, 6, 94);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

/**Estilo parrafo 1**/
#parrafo1 {
  color: rgb(3, 4, 87);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5em;
}

/**Estilo parrafo 2**/
#parrafo2 {
  color: rgb(151, 28, 89);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.2em;
}

.Buscador_Idioma{
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-content: center;
  flex-wrap: nowrap;
  margin-top: 40px;
  margin-right: 40px ;
}

/*Estilos para el buscador de la esquina superior derecha*/
#btn_buscar{
  background-color: #b953db00;
  width: 7rem;
  height: 2rem;
  margin: 0 !important;
  float: left;
  border: 2px solid rgb(249, 249, 250)
}

/*Estilos para el botón de idiomas*/
#btn_idiomas {
background-color: #b953db00;
}

#texto_coworking{
  font-size: 1.2rem;
}

#texto_coliving{
  font-size: 1.2rem;
}

.contFondo {
  position: absolute;
  width: 40%;
  margin-top: 0px;
  margin-left: 500px;
}

#app{
  margin-top: 20px;
  width: 100%;
}

.text-left{
  font-size: 3rem;
}

.tabla{
  width: 40%;
  text-align: justify;

}
@media (min-width: 1366px){
  .contenedor{
    width: 66% !important
    ;
  }
}
</style>