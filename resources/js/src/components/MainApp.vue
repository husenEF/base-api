<template>
  <div id="main-app" class="clearfix">
    <Header />
    <router-view></router-view>
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