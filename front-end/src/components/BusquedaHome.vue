<template>
  <div class="b_busqueda">
    <span>Español</span>
    <input
      style="color: white"
      type="text"
      icon="mdi-magnify"
      placeholder="Buscar"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.b_busqueda {
  position: absolute;
}
.b_busqueda span {
  margin-left: 5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
  padding: 0.8rem 2.1rem 1rem 20rem;
  border-right: 2px solid white;
}
.b_busqueda input {
  position: absolute;
  border: 1.5px solid white;
  color: rgba(250, 250, 250, 0.856);
  padding: 2% 6%; /** Distancia entre los bordes del ovalo de */
  border-radius: 20px;
  margin-left: 2rem;
  width: 130px;
  height: 25px;
}
.b_busqueda input:focus{
  text-decoration: none;
  outline: none;
}
.b_busqueda input::placeholder{
  color: rgb(255, 255, 255);
}
</style>
