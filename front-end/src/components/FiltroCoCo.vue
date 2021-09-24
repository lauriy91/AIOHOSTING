<template>
  <div class="filtrosCoco">
    <span>Coworking</span>
    <input
      style="color: white"
      type="text"
      icon="mdi-magnify"
      placeholder="Coliving"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filtrosCoco {
  position: absolute;
  float: right;
  margin-top: -580px;
  margin-right: -700px;
  color: rgb(241, 6, 6);
}
.filtrosCoco span {
  font-size: 16px;
  font-weight: 700;
  color: rgb(255, 10, 10);
  padding: 5px 1rem;
  border-right: 2px solid white;
}
.filtrosCoco input {
  border: 2px solid white;
  color: rgb(255, 0, 0);
  padding: 6px;
  border-radius: 10px;
  margin-left: 1rem;
  width: 140px;
}
.filtrosCoco input:focus{
  text-decoration: none;
  outline: none;
}
.filtrosCoco::placeholder{
  color: white;
}

</style>