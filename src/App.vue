<template>
<index></index>
<el-button type=""></el-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import Index from './views/index.vue';

@Options({
  components: {
    HelloWorld,
    Index,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/font-awesome-4.7.0/css/font-awesome.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
