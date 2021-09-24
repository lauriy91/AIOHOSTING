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
  padding: 10px;
  color: white;
}
.b_busqueda span {
  font-size: 16px;
  font-weight: 700;
  color: white;
  padding: 5px 1rem;
  border-right: 2px solid white;
}
.b_busqueda input {
  border: 2px solid white;
  color: white;
  padding: 6px;
  border-radius: 10px;
  margin-left: 1rem;
  width: 140px;
}
.b_busqueda input:focus{
  text-decoration: none;
  outline: none;
}
.b_busqueda input::placeholder{
  color: white;
}

</style>