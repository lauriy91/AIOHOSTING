<template>
  <div class="footer">
    <!--Botón Facebook-->
    <div>
      <button onclick="location.href='https://www.facebook.com'">
        <!--Icono Facebook-->
        <img
          src="https://image.flaticon.com/icons/png/512/1216/1216882.png"
          alt=""
          width="20px"
          height="20px"
        />
      </button>
    </div>

    <!--Botón LinkedIn-->
    <div>
      <button onclick="location.href='https://co.linkedin.com/'">
        <!--Icono LinkedIn-->
        <img
          src="https://image.flaticon.com/icons/png/512/1216/1216930.png"
          alt=""
          width="20px"
          height="20px"
        />
      </button>
    </div>

    <!--Botón Instagram-->
    <div>
      <button onclick="location.href='https://www.instagram.com/'">
        <!--Icono Instagram-->
        <img
          src="https://image.flaticon.com/icons/png/512/1216/1216878.png"
          alt=""
          width="20px"
          height="20px"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterDescripcion",
};
</script>

<style>
.footer {
  display: flex;
  float: right;
}

.footer div {
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>