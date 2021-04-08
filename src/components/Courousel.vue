<template>
  <div>
    <div class="carousel-image">
      <div class="main-carousel-image">
        <div class="" ref="carouselImage">
          <ul
            class="ul-image"
            style="
              transform: translate3d(0px, 0px, 0px);
              transition-duration: 500ms;
            "
            ref="carouselImage"
          >
            <li v-for="(item, index) in images" class="li-image" :key="index">
              <!-- <img :src="item.src" /> -->
            </li>
          </ul>
        </div>
      </div>

      <div class="carousel-pointer-image">
        <ul class="ul-pointer-image">
          <li >
           
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselGoods",
  data() {
    return {
      images: [
        { text: "图片2", src:"https://oss-cdn.yevpt.com/post/bg-images/202011/83d1836f206502e01f4bf1455d089516.jpg?a=7976f9b06d69485cfd0ecf6941a9673e&b=605e0725" },
        { text: "图片3", src:"https://oss-cdn.yevpt.com/post/bg-images/202011/83d1836f206502e01f4bf1455d089516.jpg?a=7976f9b06d69485cfd0ecf6941a9673e&b=605e0725" },
        { text: "图片4", src:"https://oss-cdn.yevpt.com/post/bg-images/202011/83d1836f206502e01f4bf1455d089516.jpg?a=7976f9b06d69485cfd0ecf6941a9673e&b=605e0725" },
      ],
      imagesIndex: 0,
      CourouselWidth:0
    };
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },

  methods: {
    MoveImage() {
      if(this.$refs.carouselImage.className.indexOf('arrow-left') > -1){
        this.imagesIndex--;
        if(this.imagesIndex==0){
            this.$refs.carouselImage.className = "";
        }
      }else if(this.$refs.carouselImage.className.indexOf('arrow-right') > -1){
         this.imagesIndex++;
            if(this.imagesIndex==this.images.length-1){
            this.$refs.carouselImage.className = "";
        }
      }
      this.$refs.carouselImage.style =
        "transform: translate3d(-" +
        620 * this.imagesIndex +
        "px, 0px, 0px); transition-duration: 500ms;";
    },
    ShowImageByPointer(index) {
      this.imagesIndex = index;
      this.$refs.carouselImage.style =
        "transform: translate3d(-" +
        620 * this.imagesIndex +
        "px, 0px, 0px); transition-duration: 0ms;";
    },
    CarouselTimer() {
      setTimeout(() => {
        this.$refs.carouselImage.style =
          "transform: translate3d(-" +
          620 * this.imagesIndex +
          "px, 0px, 0px); transition-duration: 500ms;";
        if (this.imagesIndex >= this.images.length - 1) this.imagesIndex = 0;
        else this.imagesIndex++;
        this.CarouselTimer();
      }, 4000);
    },
  },
};
</script>
<style lang='less' scoped>
</style>
