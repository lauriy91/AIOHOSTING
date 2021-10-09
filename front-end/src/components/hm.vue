
  <template>
  <!-- CONTENEDOR GRID IZQUIERDO -->

  <v-container class="contenedor">
    <!--LOGO DE LA APLICACIÓN-->
    <div class="logo">
      <img id="logo" src="https://i.ibb.co/6NjgxCg/logo.png" />
    </div>

    <!--CONTENEDOR DE BOTONES COWORKING - COLIVING-->
    <div class="row" style="height:0px">
      <div class="col s8">
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
    </div>

    <!-- CONTENEDOR GRID DERECHO -->

    <!-- CONTENEDOR IMAGEN DE FONDO  -->
    <div class="contFondo">
      <img height="500px" src="https://i.ibb.co/r4YGF3V/img-intro.png" />
    </div>

    <!--Contenedor botones de la parte superior derecha-->
    <div class="Buscador_Idioma">
      <busqueda-home />
    </div>

    <!--Contenedor pie de pagina-->
    <div class="Footer">
      <footer-descripcion />
    </div>
  </v-container>
</template>


<!-- SCRIPT -->
<script>
import FooterDescripcion from "../components/FooterDescripcion.vue";
import BusquedaHome from "../components/BusquedaHome.vue";
import PiePagina from "../components/PiePagina.vue";
export default {
  components: {
    BusquedaHome,
    FooterDescripcion,
    PiePagina,
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
#contenedor{
@media screen and ([contenedor]) {
 /* Nuestras nuevas reglas con este ancho o menos de pantalla */
}
}
/*ESTILO BANNER QUE CONTIENE LOS BOTONES DE COWORKING Y COLIVING */ 
  
#coco {
  margin-top: 140px;
  margin-left: -300px;
  background: linear-gradient(70deg, rgba(63, 5, 156, 0.925), rgb(56, 42, 77));
  font-size: 2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 80%;
}
/*ESTILO LOGO */
.logo {
  position: absolute;
  width: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  color: rgb(123, 48, 153);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
/**Estilo parrafo 1**/
#parrafo1 {
  color: rgb(9, 109, 122);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.3em;
  margin-top: -20px;
}
/**Estilo parrafo 2**/
#parrafo2 {
  color: rgb(77, 74, 77);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1em;
}
#textoCoworking {
  font-size: 1rem;
  padding-left: 0px;
  color: white;
}
#separador {
  margin-top: 15px;
  font-size: 1.2rem;
  margin-left: 30px;
  margin-right: 30px;
  color: white;
}
#textoColiving {
  font-size: 1rem;
  padding-left: 0px;
  color: white;
}
.contFondo {
  position: relative;
  width: 50%;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 500px;
}
.Buscador_Idioma {
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: right;
  align-content: center;
  flex-wrap: nowrap;
  margin-top: 120px;
  margin-right: 100px;
}
.Footer {
  position: absolute;
  padding-top: 0px;
  padding-left: 920px;
}
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
    height: 100%;
  }
}
</style>
-->
