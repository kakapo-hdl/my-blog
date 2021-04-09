<template>
    <div class="courousel-main">
       <courousel></courousel> 
    </div>
</template>

<script>
import Courousel from '../components/Courousel.vue'
export default {
components: { Courousel },
name:'HomePage'
  
}
</script>
<style lang='less' scoped>
.courousel-main{
  width: 100%;
  padding:0 24px 40px 24px;
}
</style>