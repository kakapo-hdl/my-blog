<template>
  <div class="courousel-main">
    <courousel :delayTime="1000" :imageChangeTime="5000"></courousel>
    <div>

      <div class="Home-contain-mian">
        <div class="flex-container-left" style="padding-right:30px">
                <div class="carousel-action">
        <span class="title-text">猜你喜欢</span>
        <div style="display: flex; align-items: center">
          <switch-btn :isClick="false" style="margin-right: 10px"></switch-btn>
          自动播放
        </div>
      </div>
          <el-card :body-style="`padding:0`" class="acticle-contain-item">
            <div style="overflow:hidden">
              <div class="acticle-picture"
              :style="`background-image:
               url(https://oss-cdn.yevpt.com/post/bg-images/202006/af22167297594a991a300fe0bd80c958.jpg?a=9e04a93cf6d267ae6ea198d8cecc88dc&b=6073be57)`"
            ></div> </div>
 
            <div class="acticle-title">
            文章标题
            </div>
            <div class="acticle-time">十二月 17, 2020</div>
            <div class="acticle-text">
              每次查询我的笔记，总是需要在我记录的多份Node相关搭建中选择，出于整洁强迫症的需求，现在抽出时间整理成了一篇。本篇，不仅记录了
            </div>
            <div class="acticle-action">
              <div style="padding-left:16px">    
                 <el-button type="primary" size="small" >开始阅读</el-button>
                 </div>
              <div class="action-action-icon" style="display:flex ;padding:8px">
                <div class="btn-acticle">          
                <i class="fa fa-eye" style=" font-size: 1.5em;  margin-right:5px;" aria-hidden="true"></i>
                <span style="font-size:0.5em;padding-top:3px">222</span></div>
                <div class="btn-acticle">          
                <i class="fa fa-eye" style=" font-size: 1.5em;  margin-right:5px;" aria-hidden="true"></i>
                <span style="font-size:0.5em;padding-top:3px">222</span></div>
                <div class="btn-acticle">          
                <i class="fa fa-eye" style=" font-size: 1.5em;  margin-right:5px;" aria-hidden="true"></i>
                <span style="font-size:0.5em;padding-top:3px">222</span></div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="flex-container-right" >
        <div class="carousel-action">
        <span class="title-text">最近心情</span>
        <div style="display: flex; align-items: center">
          </div>
          </div>
          <!-- <div class="personal-mood"> -->
            <el-card>
              <header>
                <div class="person-msg">
                  <el-avatar:src="`https://oss-cdn.yevpt.com/post/bg-images/202006/af22167297594a991a300fe0bd80c958.jpg?a=9e04a93cf6d267ae6ea198d8cecc88dc&b=6073be57`"></el-avatar:src=>
                  <div class="person-description">
                    <div class="person-name">
                      <a></a> <span></span>
                    </div>
                    <div class="person-tag"></div>
                  </div>
                </div>
                <span>人</span><span>动物</span><span>aliance</span>
              </header>
            </el-card>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SwitchBtn from "../components/common/SwitchBtn.vue";
import Courousel from "../components/Courousel.vue";
export default {
  components: { Courousel, SwitchBtn },
  name: "HomePage",
};
</script>
<style lang='less' scoped>
.courousel-main {
  width: 100%;
  padding: 0 24px 40px 24px;
  max-width: 1080px;
  margin: auto;
}
.Home-contain-mian {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}
/*每篇文章样式*/
.acticle-contain-item {
  max-width: 100%;
  background: #ffffff;
  overflow: hidden;
    border-radius: 5px;
}
.acticle-picture {
  max-width: 100%;
  height: 100%;
  background: gray;

  padding-bottom: 56%;
  background-size: cover;
  background-position: center center;
  transition: all 444ms ease-in-out;
}
.acticle-picture:hover{
  transform: scale(1.05);
}
.acticle-title{
  font-size: 1.25em;
  letter-spacing:0.125em;
  font-weight: 500;
  word-break: break-all;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
.acticle-time{
  font-size: 0.65em;
  display: flex;
  color: #B4B4B4;
  padding: 0 16px;
  position: relative;
  top: -10px;
}
.acticle-text{
  text-align: left;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: .0071428571em;
  margin: 10px 16px 24px 16px;
  overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-line-clamp: 2; 
 -webkit-box-orient: vertical;
}
.acticle-action{
  display: flex;
  justify-content: space-between;
}
.btn-acticle{
  display: flex;
  align-items: center;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 5px;
}
.btn-acticle:active{ 
  background-color: #C1C1C1;
}

/*发表心情的样式*/
.personal-mood{
  max-width: 760px;
  padding:0 10px 10px; 
}
</style>