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
  float: right;
  margin-top: -580px;
  margin-right: -1000px;
  color: rgb(255, 255, 255);
}
.b_busqueda span {
  font-size: 15px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  padding: 5px 1rem;
  border-right: 2px solid white;
}
.b_busqueda input {
  border: 1.5px solid white;
  color: rgba(250, 250, 250, 0.856);
  padding: 6px;
  border-radius: 20px;
  margin-left: 1rem;
  width: 130px;
  height: 25px;
}
.b_busqueda input:focus{
  text-decoration: none;
  outline: none;
}
.b_busqueda input::placeholder{
  color: white;
}

</style>