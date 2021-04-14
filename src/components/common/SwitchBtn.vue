<template>
  <div class="switch-btn" @click='ClickSwitch()'>
    <div :class="`${isActive ? 'switch-btn-active':''} switch-btn-cover `"></div>
    <div :class="`${isActive ? 'btn-cycle-active':''} switch-btn-cycle `"></div>
  </div>
</template>

<script lang="ts">
export default {
name:"SwitchBtn",
setup(props,context){
		console.log(props)
		console.log(context)
		context.emit('eventName')
},
data(){
  return{
    isActive:false
    }
},
props:{
  isClick:Boolean,
},
methods:{
  ClickSwitch(){
    // alert(this.isActive)
    this.isActive = !this.isActive;
    this.$emit('GetStatus',this.isActive);
  }
}
}
</script>

<style>
.switch-btn{
  position: relative;
  border-radius: 14px;
  width: 48px;
  height: 28px;
  overflow: hidden;
  cursor:pointer;
}
.switch-btn-active{
  background: currentColor  !important;
}
.switch-btn-cover{
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: rgba(0,0,0,.38);
}

.switch-btn-cycle{
  top: 4px;
  left: 4px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position:absolute;
  transition: transform .35s; 
}

.btn-cycle-active{
    transform: translateX(20px);
    background: currentColor;
}
</style>