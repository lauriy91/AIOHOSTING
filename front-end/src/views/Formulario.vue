<template>
<div>
<!---->
<!--Barra superior - Banner-->
<banner-descripcion></banner-descripcion>

<v-app-bar id="banner2" prominent>
  <h2 id="texto_banner2">¡Estas a un paso del lugar de tus sueños!</h2>
</v-app-bar>

<v-app-bar id="banner3" prominent>
  <h3 id="texto_banner3">¡Felicitaciones! Seleccionaste la mejor ubicacion.<br>¡No te la pierdas! Confirma ahora tu reserva</h3>
</v-app-bar>

<!--Inicio cuerpo de la página-->
<div>

        <!--Form-->
    <div id="formulario">
      <br>
      <br>
      <label><h2 id ="txt_datosform">Ingresa tus datos:</h2></label>
      <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="reserva.name"
        :rules="nameRules"
        :counter="10"
        required
      ></v-text-field>

      <v-text-field
        label="E-mail"
        v-model="reserva.email"
        :rules="emailRules"
        required
      ></v-text-field>

      <v-text-field
        label="Telefono"
        v-model="reserva.telefono"
        :rules="telefonoRules"
        required
        name="Telefono"
      ></v-text-field>

      <v-btn id ="btn_enviar"
          @click="enviar"
          :disabled="!valid" dark
      >Enviar</v-btn>
  </v-form>
  

    </div>

    <!--Cierrebotón de reserva-->
    </div>

    <!--Tratamiento de datos-->

    <div id="checkbox">
      <label class="custom-radio-checkbox">
        <!-- Input oculto -->
        <input class="custom-radio-checkbox__input" type="checkbox" />
        <!-- Imagen en sustitucion -->
        <span
          class="custom-radio-checkbox__show custom-radio-checkbox__show--checkbox"
        ></span>
        <!-- Texto -->
        <span class="custom-radio-checkbox__text">
          Acepto el uso y tratamiento de datos</span
        >
      </label>
    </div>

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
  </div>
</template>
<script>
import BannerDescripcion from '../components/BannerDescripcion.vue'
  export default {
  components: { BannerDescripcion },
    data: () => ({
      
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      telefonoRules: [
        v => !!v || 'Phone is required',
        v => (v && v.length <= 10) || 'Phone must be 10 numbers',
      ],

      valid: true,
      reserva:{}
    }),
    methods:{
      enviar(){
        console.log("datos enviados")
      },
      validate () {
        this.$refs.form.validate()
      },
    }
  }
</script>

<style>
/*Estilos para el banner*/
#banner {
  background: linear-gradient(to right, #3d4484, #b853db);
}

#buscador {
  height: 10px;
}

/*Estilos para el logo*/
#logo {
  width: 8rem;
  /*float:left;*/
}

/*Estilos para el contenedor del logo*/
#contenedor_logo {
  background-color: white;
}

/*Estilos para el buscador de la esquina superior derecha*/
#buscador {
  background-color: #b953db00;
  width: 10rem;
  height: 0.5rem;
  float: right;
}

/*Estilos para el texto del buscador de la esquina superior derecha*/
#texto_buscador {
  color: rgb(194, 169, 169);
  font-size: 1rem;
  font-weight: bold;
}

/*Estilos para el botón de idiomas*/
#boton_idiomas {
  background-color: #b853db;
  width: 7rem;
  height: 2rem;
  float: left;
  margin-top: 20px;
  margin-right: 20px;
}

/*Estilos para el texto de idiomas*/
#texto_idioma {
  color: white;
  font-size: 1rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

#formulario {
  padding-right: 500px;
  padding-bottom: 30px;
  padding-left: 500px;
  border: "1";
}

#banner2 {
  background: linear-gradient(to right, #f9f7fa, #f9f7fa);
}

#texto_banner2 {
  color: #3d4484;
  padding-top: 20px;
  text-align: center;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#banner3 {
  background-color: darkcyan;
}

#texto_banner3 {
  color: whitesmoke;
  font-family: cursive;
  padding-top: 20px;
  text-align: center;
  width: 100%;
}

#txt_datosform {
  text-align: center;
}

#checkbox {
  text-align: center;
  padding-bottom: 100px;
}

#texto_moneda {
  position: absolute;
  color: white;
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-left: 90px;
}

#btn_buscar {
  background-color: #b853db;
  width: 7rem;
  height: 2rem;
  float: left;
  margin-top: 20px;
  border: 2px solid rgb(249, 249, 250);
}

#btn_enviar {
  background: linear-gradient(70deg, rgba(47, 1, 255, 0.678), rgb(170, 3, 248));
}

#pie_pagina {
  width: 100vmax;
  margin: 0%;
}
</style>
