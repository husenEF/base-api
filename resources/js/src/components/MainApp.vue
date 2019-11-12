<template>
  <div id="main-app" class="clearfix">
    <Header />
    <div class="container p-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./includes/Header.vue";
export default {
  name: "mainApp",
  components: {
    Header
  }
};
</script>