<template>  
  <aside class="aside-menu"></aside>
  <div class="navigation">

    <div class="navigation-content">
      <div class="navigation-content-left flex-center">
        <div class="menu-icon" @click="asideFlag =!asideFlag"><i class="fa fa-navicon"></i></div>
        <a class="nav-banner">Totolo</a>
      </div>
      <div class="navigation-content-right flex-center">   
        <div class="moon-sun"><i class="fa fa-moon-o"></i></div>
        <button class="btn">登录</button>
      </div>
      <div class="navigation-content-middle flex-center ">
        <!-- <div class="nav-content"> -->
        <a class="navigation-link" ref="nav-link-item">首页</a>
        <a class="navigation-link" ref="nav-link-item">关于我</a>
        <a class="navigation-link" ref="nav-link-item">首页</a>
        <a class="navigation-link" ref="nav-link-item">首页</a>
        <a class="navigation-link" ref="nav-link-item">首页</a>
        <a class="nav-banner">Totolo</a>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      asideFlag:false
    };
  },
  methods:{
    
  }
};
</script>

<style  scoped>

.navigation {
  height: 56px;
  border-bottom: 1px solid #eee;
  box-shadow: 1px 1px #eee;
}
.navigation-content {
  max-width: 1420px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  /* justify-content: space-between; */
  text-align: center;
}
.navigation-content-left {
  position: absolute;
  height: 100%;
  left: 0;
  padding-left: 80px;
}
.navigation-content-right {
  position: absolute;
  height: 100%;
  right: 0;
  padding-right: 80px;
}
.navigation-content-middle {
  height: 100%;
  justify-content: center;
}
.nav-banner {
  font-weight: 800;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  padding: 0 10px;
  display: block;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 1s;
}
.nav-banner:hover {
  background-color: #e7eaed;
}
.navigation-link {
  width: 80px;
  height: 56px;
  line-height: 56px;
  margin: 0 6px;
  display: block;
  cursor: pointer;
  transition-duration: 1s;
}

.navigation-link:hover {
  background-color: #e7eaed;
}
.moon-sun {
  padding: 0 16px;
  margin-right: 20px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 4px;
  transition-duration: 1s;
}
.menu-icon{
    cursor: pointer;
    height: 45px;
    line-height: 55px;
    width: 45px;
    border-radius: 50%;
    font-size: 20px;
    transition-duration: 1s;
}
.menu-icon:hover{
    background-color: #e7eaed;
}
.moon-sun:hover {
  background-color: #e7eaed;
}
.aside-menu{
  width: 270px;
  height: 100%;
  z-index: 999;
  background-color: #1A1D53;
}
@media only screen and (max-width: 960px){
.moon-sun,.navigation-link,.btn,.navigation-content-left .nav-banner {
  display: none;
}
.navigation-content-left{
  padding: 0;
height: auto;
}
.navigation-content{
      padding: 4px 16px;
}
}
@media only screen and (min-width: 960px){
.navigation-content-middle .nav-banner{
  display: none;
}
.menu-icon{
  display: none;
}


}

</style>>
