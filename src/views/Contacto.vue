<template>
    <div class="contacto">
      <h1>Contacto</h1>
      <form @submit.prevent="enviarFormulario">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" v-model="nombre" id="nombre" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="mensaje">Mensaje:</label>
          <textarea v-model="mensaje" id="mensaje" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <router-link to="/">Volver al inicio</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contacto',
    data() {
      return {
        nombre: '',
        email: '',
        mensaje: ''
      };
    },
    methods: {
      enviarFormulario() {
        // Aquí puedes manejar la lógica para enviar el formulario.
        // Por ahora, solo mostraremos los datos en la consola.
        console.log('Formulario enviado:', {
          nombre: this.nombre,
          email: this.email,
          mensaje: this.mensaje
        });
  
        // Limpiar el formulario
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
        alert('Tu mensaje ha sido enviado.');
      }
    }
  }
  </script>
  
  <style scoped>
  .contacto {
    max-width: 600px;
    margin: auto;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 10px;
  }
  button {
    margin-top: 20px;
  }
  </style>