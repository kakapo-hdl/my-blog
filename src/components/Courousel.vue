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
      <div  :ref="setItemRef" v-for="(item, index) in images" class="li-image" :key="index">
        <div class="crousel-image-item" :style="`background-image:url(${item.src});`" />
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
  mounted() {
    let that = this;
    this.imagesIndex = 2;
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
      // console.log(this.itemRefs);
      //       if (diretion == "left") {
      //   this.$refs.swiperItem[index].style =
      //     "left:1120px;display:block;transition-duration:0ms";
      //   setTimeout(() => {
      //     this.$refs.swiperItem[originalIndex].style = "left:-1120px;display:block;";
      //     this.$refs.swiperItem[index].style = "left:0px;display:block;";
      //   }, 10);
      // }
      // else{
      //    this.$refs.swiperItem[index].style =
      //     "left:-1120px;display:block;transition-duration:0ms";
      //   setTimeout(() => {
      //    this.$refs.swiperItem[originalIndex].style = "left:1120px;display:block;";
      //     this.$refs.swiperItem[index].style = "left:0px;display:block;";
      //   }, 10);
      // }
      // console.log(images);
      if (index < nextIndex) {
        images[index].style = `transform: translateX(-${this.imageWidth}px); transition-duration:1s`;

        setTimeout(() => {
        images[nextIndex].style = `transform: translateX(+${this.imageWidth}px); transition-duration:0s`;
        images[nextIndex].style = `transform: translateX(0px); transition-duration:1s`;
        }, 10);
        setTimeout(() => {
          images[index].style = "display:none";
        }, 1000);
      }
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
      }, 4000);
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
  transition: 1s;
  height: 100%;
  display: flex;
}
.li-image {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}
</style>
