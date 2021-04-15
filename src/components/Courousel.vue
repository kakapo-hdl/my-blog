<template>
  <div class="carousel-action">
    <span class="">猜你喜欢</span>
    <div style="display:flex;align-items: center;"><switch-btn :isClick="false" @get-status="getSwitch()" style="margin-right:10px"></switch-btn> 自动播放</div>
  </div>
  <div
    class="main-carousel-image"
    :style="`height:${imageHeight}px`"
    ref="ImageArea"
  >
    <ul ref="AllImages" :class="`ul-carousel-image`">
      <div
        :ref="setItemRef"
        v-for="(item, index) in images"
        style="display: none"
        class="li-image"
        :key="index"
        :index ="index"
      >
        <!-- <div> -->
        <div class="carousel-shadow"></div>
        <div
          class="crousel-image-item"
          :style="`background-image:url(${item.src});`"
        />
        <div class="crousel-image-message">
          <div>
            {{ item.text }}
          </div>
          <div>
            <a class="v-btn">
              <span>开始阅读</span>
            </a>
          </div>
        </div>

        <!-- </div> -->
      </div>
      <div class="crousel-index-icon">
        <i v-for="(item,index) in images" @click="changeCrousel(index)" :key="index" class="fa fa-tint" :style="`color:${imagesIndex==index ? '#D5D8DA': '#A2A7AC'};cursor: pointer;margin-right:30px`">
        <!-- {{imagesIndex+'aa'+index}} -->
        </i>
        </div>
    </ul>
  </div>
</template>

<script >
import SwitchBtn from './common/SwitchBtn.vue';
export default {
  components: { SwitchBtn },
  name: "CarouselGoods",
  data() {
    return {
      imageHeight: 0,
      imageWidth: 0,
      itemRefs: [],
      timer:Object,
      images: [
        {
          text: "图片2",
          src:
            "https://oss-cdn.yevpt.com/post/bg-images/202011/83d1836f206502e01f4bf1455d089516.jpg?a=7976f9b06d69485cfd0ecf6941a9673e&b=605e0725",
        },
        {
          text: "图片3",
          src:
            "https://oss-cdn.yevpt.com/post/bg-images/202008/01ab6a6a2e31ae3ca406aba7064c1f56.jpg?a=e60ab899cb235aee7190757b6bcf2e18&b=602bf371",
        },
        {
          text: "图片4",
          src:
            "https://oss-cdn.yevpt.com/post/images/b6688fd35cc540a8b21f5328b2bca2ae.jpg?a=a72c1d9fc317b105d4e7ff68be69bdfa&b=606e0ff6",
        },
      ],
      imagesIndex: 0,
      index:0,
      CourouselWidth: 0,
    };
  },
  props: {
    delayTime: Number,
    imageChangeTime: Number,
    isAuto: Boolean,
    contents: {
      imageUrl: String,
      imageMsg: String,
      imageLink: String,
    },
  },
  emits:{
    
  },
  mounted() {
    let that = this;
    that.itemRefs[0].style = `left:0px; transition-duration:1s;`;
    for(let [index,item] of that.itemRefs.entries()){

    item.addEventListener('transitionend', ()=> {
         if(parseInt(item.getAttribute("index")) !== this.imagesIndex){
           item.style="display:none"
         }
    });
    }
    this.startCarouselTimer();
    that.imageHeight = document.documentElement.clientHeight - 56 - 60 - 40;
    setTimeout(() => {
      that.imageWidth = that.$refs.ImageArea.offsetWidth;
      window.onresize = function () {
        that.imageWidth = that.$refs.ImageArea.offsetWidth;
        that.imageHeight = document.documentElement.clientHeight - 56 - 60 - 40;
      };
    }, 20);
  },

  methods: {
    //轮播图片移动
    setItemRef(el) {
      this.itemRefs.push(el);
    },
    CarouselMove(index, nextIndex, direction) {
      let images = this.itemRefs;
      if(direction == 'right'){
      images[nextIndex].style = `left:${this.imageWidth}px; transition-duration:0ms`;
      setTimeout(() => { images[index].style = `left:-${this.imageWidth}px; transition-duration:${this.delayTime}ms`;
        images[ nextIndex].style = `left:0px; transition-duration:${this.delayTime}ms`;
      }, 0);
      }else{
      images[nextIndex].style = `left:-${this.imageWidth}px; transition-duration:0ms`;
      setTimeout(() => { images[index].style = `left:${this.imageWidth}px; transition-duration:${this.delayTime}ms`;
        images[ nextIndex].style = `left:0px; transition-duration:${this.delayTime}ms`;
      }, 0);
      }
      // setTimeout(() => {
      //   images[index].style = "display:none";
      // }, this.delayTime);

    },
    getSwitch(e){
      console.log(this);
    },
    myEndFunction() {
      console.log(`finish`);
    },
    changeCrousel(nextIndex){
      this.stopTimer();
      if(nextIndex != this.imagesIndex){
         this.stopTimer();
        if(nextIndex > this.imagesIndex){
        this.CarouselMove(this.imagesIndex,nextIndex,'right');
        this.imagesIndex = nextIndex;
      }else{
        this.CarouselMove(this.imagesIndex,nextIndex,'left');
        this.imagesIndex = nextIndex;
      }
      }
      this.startCarouselTimer();

    },
    startCarouselTimer() {
    this.timer = setInterval(() => {
        let lastIndex = this.imagesIndex;
        if (this.imagesIndex >= this.images.length - 1) {
          this.imagesIndex = 0;
          this.CarouselMove(lastIndex, this.imagesIndex,'right');
        } else {
          this.imagesIndex++;
          this.CarouselMove(lastIndex, this.imagesIndex,'right');
        }
      }, this.imageChangeTime);
    },
    stopTimer(){
      clearTimeout(this.timer);
    }
  },
  beforeUpdate() {
    this.itemRefs = [];
  },
};
</script>
<style lang='less' scoped>
.main-carousel-image {
  border-radius: 5px;
  overflow: hidden;
}
.crousel-image-item {
  // z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: all 444ms ease-in-out;
}
.crousel-image-item:hover {
  transform: scale(1.05);
}
.carousel-action {
  display: flex;
  justify-content: space-between;
  height: 66px;
  align-items: center;
}
.delay-carousel {
  transition-duration: 1s;
}
.ul-carousel-image {
  position: relative;
  flex: 1 0 auto;
  transition: 1s;
  height: 100%;
  display: flex;
}
.crousel-image-message {
  position: inherit;
  padding: 0 36px 60px 48px;
  bottom: 0;
  z-index: 90;
  font-size: 2.125rem !important;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-weight: 400;
  font-family: Roboto, sans-serif !important;
  color: #fff;
}
.crousel-image-message div,
a {
  padding: 12px;
}
.li-image {
  position: absolute;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex: 1 0 auto;
  align-items: flex-end;
  // display: none;
}
.carousel-shadow {
  width: 100%;
  position: absolute;
  flex: 1 0 0px;
  z-index: 1;
  padding-bottom: 31.25%;
  background: linear-gradient(
    180deg,
    rgba(49, 49, 48, 0),
    rgba(22, 29, 39, 0.9)
  );
}
.v-btn {
  display: inline-flex;
  cursor: pointer;
  border-radius: 28px;
  padding: 0 16px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: #fff;
  background-color: #cf463c;
}
.crousel-index-icon{
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  font-size: 24px;
  z-index: 99;
}
</style>
