<template>
  <div class="container mt-5 pt-5">
    <h1>Página de Inicio</h1>
    <p>Esta es la pagina principal, selecciona una opción de la barra de navegación para ir a la página correspondiente.</p>
    <router-link to="/productos">Productos</router-link>
    <router-link to="/contacto">Contacto</router-link>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
};
</script>