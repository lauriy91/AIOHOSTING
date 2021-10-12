import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alojamientos: [],
    reservas: []
  },
  mutations: {
    setAlojamientos(state, payload){
      state.alojamientos = payload;
    },
    pushAlojamiento(state, obj){
      state.alojamientos.push(obj);
    },
    setReservas(state, payload){
      state.reservas = payload;
    }
  },
  actions: {
    async cargarAlojamientos({commit}){
      //GET
      const peticion = await fetch('https://aiohosting.herokuapp.com/DescripcionHostal');
      const data = await peticion.json();
      console.log(data);
      commit('setAlojamientos', data);
    },
    async registrarAlojamiento({commit}, objAlojamientos){
      //POST
      const peticion = await fetch('https://aiohosting.herokuapp.com/DescripcionHostal', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objAlojamientos)
      });
      const data = await peticion.json();
      commit('pushAlojamiento', data);
      console.log(data);
    },
    async cargarReservas({commit}){
      const peticion = await fetch('https://aiohosting.herokuapp.com/Formulario');
      const data = await peticion.json();
      console.log(data);
      commit('setReservas', data);
    },
    async eliminarAlojamiento({commit}, obj){
      const peticion = await fetch('https://aiohosting.herokuapp.com/DescripcionHostal', {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
    }
  },
  modules: {
  }
})
