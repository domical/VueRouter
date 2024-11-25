<script>
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      productos: [
          {
            id: 0,
            nombre: "Colaciones",
            descripcion:
              "Charquican",
            precio: 8000,
            cantidad: "1 persona",
          },
          {
            id: 1,
            nombre: "Desayunos",
            descripcion:
              "Sandwich",
            precio: 5000,
            cantidad: "1 persona",
          },
          {
            id: 2,
            nombre: "Empanadas",
            descripcion:
              "Pino, Queso, Napolitana",
            precio: 2500,
            cantidad: "1 personas",
          },
          {
            id: 3,
            nombre: "Verduras",
            descripcion:
              "Mix de verduras",
            precio: 2000,
            cantidad: "1 persona",
          },
          {
            id: 4,
            nombre: "Dulces",
            descripcion:
              "Variedad de pasteles",
            precio: 3000,
            cantidad: "1 personas",
          },
          {
            id: 5,
            nombre: "Bebidas",
            descripcion:
              "A eleccion",
            precio: 1500,
            cantidad: "1 personas",
        },
      ],
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
}
</script>

<template>
  <section class="container" id="productos">
    <div class="col-12 mb-4">
      <h1 class=" text-center">Nuestros Productos</h1>
      <div class="row">
        <Card v-for="producto in productos" :key="producto.nombre" :producto="producto" />
      </div>
    </div>
    <button type="button" class="btn btn-secondary my-2" @click="goHome">Ir a Inicio</button>
  </section>
</template>