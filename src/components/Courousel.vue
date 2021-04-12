<template>
  <div class="carousel-action">
    <span class="">猜你喜欢</span>
    <div>自动播放</div>
  </div>
  <div
    class="main-carousel-image"
    :style="`height:${imageHeight}px`"
    ref="ImageArea"
  >
    <ul ref="AllImages" :class="`ul-carousel-image`">
      <div  :ref="setItemRef" v-for="(item, index) in images" style="display:none" class="li-image" :key="index">
        <!-- <div> -->
        <div class="carousel-shadow"></div>
        <div class="crousel-image-item" :style="`background-image:url(${item.src});`" />
        <div class="crousel-image-message">
        <div >
        {{item.text}}
       </div>
       <div>      
            <a class="v-btn"> 
           <span>开始阅读</span>
         </a></div>

        </div>

        <!-- </div> -->

      </div>

    </ul>
  </div>

  <!-- <div class="carousel-pointer-image">
        <ul class="ul-pointer-image">
          <li >
           
          </li>
        </ul>
      </div> -->
</template>

<script>
export default {
  name: "CarouselGoods",
  data() {
    return {
      imageHeight: 0,
      imageWidth: 0,
      itemRefs: [],
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
          src:"https://oss-cdn.yevpt.com/post/images/b6688fd35cc540a8b21f5328b2bca2ae.jpg?a=a72c1d9fc317b105d4e7ff68be69bdfa&b=606e0ff6"        },
      ],
      imagesIndex: 0,
      CourouselWidth: 0,
    };
  },
  props:{
    delayTime:Number,  
    imageChangeTime:Number,
    isAuto:Boolean,
    contents:
    {
      imageUrl:String,
      imageMsg:String,
      imageLink:String
    },

  
  },
  mounted() {
    let that = this;
    that.itemRefs[0].style =`left:0px; transition-duration:1s;` ;
    this.CarouselTimer();
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
    setItemRef(el){
      this.itemRefs.push(el);
    },
    CarouselMove(index, nextIndex) {
      let images = this.itemRefs;
        images[nextIndex].style = `left:${this.imageWidth}px; transition-duration:${this.delayTime}ms`;
        setTimeout(() => {
        images[index].style = `left:-${this.imageWidth}px; transition-duration:${this.delayTime}ms`;
        images[nextIndex].style = `left:0px; transition-duration:${this.delayTime}ms`;
        },10);
        setTimeout(() => {
           images[index].style="display:none"
        }, this.delayTime);
    },
    myEndFunction() {
      console.log(`finish`);
    },
    CarouselTimer() {
      setTimeout(() => {
        let lastIndex = this.imagesIndex;
        if (this.imagesIndex >= this.images.length - 1) {
          this.imagesIndex = 0;
          this.CarouselMove(lastIndex,this.imagesIndex)
        } else {
          this.imagesIndex++;
           this.CarouselMove(lastIndex,this.imagesIndex)
        }
        this.CarouselTimer();
      }, this.imageChangeTime);
    },
  },
    beforeUpdate() {
    this.itemRefs = []
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
.crousel-image-message{
  position: inherit;
  padding:0 36px 60px 48px;
  bottom: 0;
  z-index: 100;
  font-size: 2.125rem!important;
  line-height: 2.5rem;
  letter-spacing: .0073529412em!important;
  font-weight: 400;
  font-family: Roboto,sans-serif!important;
  color: #fff;
}
.crousel-image-message div,a{
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
.carousel-shadow{
  width:100%;
  position: absolute;
flex: 1 0 0px;
z-index: 1;
padding-bottom: 31.25%;
background: linear-gradient(
180deg
,rgba(49,49,48,0),rgba(22,29,39,.9));
}
// .v-btn {
//     align-items: center;
//     border-radius: 4px;
//     display: inline-flex;
//     flex: 0 0 auto;
//     font-weight: 500;
//     letter-spacing: .0892857143em;
//     justify-content: center;
//     outline: 0;
//     position: relative;
//     text-decoration: none;
//     text-indent: .0892857143em;
//     text-transform: uppercase;
//     transition-duration: .28s;
//     transition-property: box-shadow,transform,opacity;
//     transition-timing-function: cubic-bezier(.4,0,.2,1);
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//     vertical-align: middle;
//     white-space: nowrap;
// }
// .v-btn__content {
//     align-items: center;
//     color: inherit;
//     display: flex;
//     flex: 1 0 auto;
//     justify-content: inherit;
//     line-height: normal;
//     position: relative;
// }
// .v-btn--contained:active {
//     box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
// }
.v-btn{
  display: inline-flex;
  cursor: pointer;
  border-radius: 28px;
  padding: 0 16px;
  height: 36px;
  line-height: 36px;
  font-size:16px;
  color: #fff;
  background-color:#CF463C ;
}
</style>
