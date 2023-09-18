<template>
  <v-img height="80px" width="80px" src="/Spinner-Abstract-shapes.gif"></v-img>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 64, // Default size of the loader
    },
    width: {
      type: Number,
      default: 6, // Default width of the loader
    },
    color: {
      type: String,
      default: "#00C853", // Default color of the loader
    },
  },
};
</script>
