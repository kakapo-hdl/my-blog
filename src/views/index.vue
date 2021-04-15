<template>
    <navigation></navigation>   
  
  <div class="main-container margin-container">
   <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Index",
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.margin-container{
  margin-top: 56px;
  padding: 0;
}

</style>