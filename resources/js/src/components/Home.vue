<template>
  <div class="clearfix">
    <h1>Home</h1>
    <p>{{welcome}}</p>
  </div>
</template>

<script>
export default {
  name: "homeComponent",
  computed: {
    welcome() {
      return this.$store.getters.welcome;
    }
  }
};
</script>