<template>
  <div class="filtro">
      <div class="item">
          <span>Ubicación</span>
          <input type="text">
      </div>
      <div class="item">
          <span>Alojamiento</span>
          <input type="text">
      </div>
      <div class="item">
          <span>Estadia</span>
          <input type="text">
      </div>
      <div class="item">
          <span>Presupuesto</span>
          <input type="number">
      </div>
      <div class="item">
          <span>Ingreso</span>
          <input type="date">
      </div>
      
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.filtro{
    display: flex;
    flex-direction: row;
    align-content: center;
    align-content: space-between;
}
.item{
    display: flex;
    flex-direction: column;
}
.item span{
    font-size: 16px;
  font-weight: 700;
  color: white;
  padding: 5px 1rem;
}
.item input {
  border: 2px solid white;
  color: white;
  padding: 2px;
  border-radius: 10px;
  margin-left: 1rem;
  width: 150px;
}
.item input::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
.item input:focus{
  text-decoration: none;
  outline: none;
}
.item input::placeholder{
  color: white;
}
</style>