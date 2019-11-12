<template>
  <div class="row">
    <div class="card">
      <div class="card-header">Home</div>
      <div class="card-body">
        <p>{{welcome}}</p>
      </div>
    </div>
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