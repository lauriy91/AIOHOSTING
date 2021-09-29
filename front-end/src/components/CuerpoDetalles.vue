    <template>
    <div id="cont_general">
      <!--Contenedor superior-->
        <div>

          <!--Contenedor título y nombre-->
        <div class="cont_nombre">
            <div class="nombre">
            <h1>Coworking</h1>
            <h1>Hostal Wiwa</h1>
            </div>

            <!--Contenedor puntaje ciudad y rating-->
            <div class="puntaje">
            <h2>Puntaje: 9.6</h2>
            <h2>Ciudad: Bogotá</h2>
            <span>
                <v-rating
                :value="4.5"
                color="purple"
                dense
                half-increments
                readonly
                size="20"
                ></v-rating
            ></span>
            </div>

            <!--Contenedor precio y botón reservar-->
            <div>
            <h1 class="precio">$800.000</h1>
            <router-link to="/formulario">
            <button id="boton_reservar" type="button">Reservar</button>
            </router-link>
            </div>
            <!--Cierre contenedor superior-->
        </div>

        <!--Contenedor imagen alojamiento-->
        <div id="imagen">
            <img
            src="https://i.ibb.co/9wKf2tj/portrait-of-young-pretty-woman-sitting-at-table-in-black-shirt-working-on-laptop-in-co-working-offic.jpg"
            alt=""
            width="100%"
            height="70%"
            />
            <!--Cierre contenedor imagen alojamiento-->
        </div>
        
        <!--Contenedor descripcion y servicios-->
        <div class="cont_descripcion">
            <div style="margin-top: 1rem" class="descripcion">
            <h2 style=" color: #673c97">
                Lo que ofrece este lugar:
            </h2>
            <p>
                Frente a la playa de Cartagena de Indias, en Bocagrande, el
                Cartagena Plaza Hotel ofrece desayuno buffet, personal disponible
                24h para asistirlo y actividades de recreacion. El Wi-Fi y el
                estacionamiento son gratuitos.
            </p>
            
            <p>El huésped puede disfrutar de la piscina con vista panorámica, ubicada
            en el piso 18, o salir de rumba en la discoteca Rezak Bar Club. Además
            encontrará club para niños y adolescentes, con pelotero y videojuegos.
            El staff de recreación organiza clases de baile, entre otras
            actividades.</p>
            </div>
            <div style="width: 40%" id="iconos_servicios">
            <div>
                <img src="https://image.freepik.com/free-icon/bills_318-9873.jpg" alt="" width="40px" height="40px">
                <label for=""> Efectivo </label>
            </div>
            <div>
                <img src="https://image.freepik.com/free-icon/wifi_318-1573.jpg" alt="" width="40px" height="40px">
                <label for="">Wifi</label>
            </div>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/1242/1242930.png" alt="" width="40px" height="40px">
                <label for="">Television</label>
            </div>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/1252/1252162.png" alt="" width="40px" height="40px">
                <label for="">Parqueadero</label>
            </div>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/1255/1255340.png" alt="" width="40px" height="40px">
                <label for="">Restaurante</label>
            </div>
            </div>
        <!--Cierre contenedor descripcion y servicios-->
        </div>
        <!--Cierre contenedor general-->
        </div>
    </div>
</template>
    
    <script>
export default {
  name: "CuerpoDetalles"
};
</script>
    

<style>

/* Flex para los contenedores de la parte superior */
.cont_nombre {
  display: flex;
  justify-content: center;
  word-wrap: break-word;
}

/* Estilos para Flex de los contenedores de la parte superior*/
.cont_nombre div {
  width: 33%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Flex para los contenedores de descripciony servicios */
.cont_descripcion {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

/* Estilos para Flex de los contenedores de descripcion y servicios*/
.cont_descripcion div {
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: 1.5%;
  margin-left: 1.5%;
}

/*Estilos párrafos de descripcion y servicios*/
.descripcion p {
  font-size: 1.3rem;
}

/*Estilos para el nombre del alojamiento*/
.nombre h1 {
  color: #009494;
  font-size: 3rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

/*Estilos para puntaje y cicudad*/
.puntaje h2 {
  font-size: 1.3rem;
}

/*Estilos para precio*/
.precio {
  color: #009494;
  font-size: 3rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: right;
}

/*Estilos para la imagen*/
#imagen {
  grid-area: imagen;
 
}

/*Grid para los iconos de los servicios*/
#iconos_servicios {
  grid-area: descripcion;
}

#iconos_servicios {
  grid-area: iconos_servicios;
}

/*Estilos para el botón reservar*/
#boton_reservar {
  font-family: Arial;
  color: #fafafa;
  font-size: 1.8rem;
  padding: 5px;
  background: linear-gradient(to right, #3d4484, #b853db);
  margin-top: 1rem;
  float: right;
}
</style>