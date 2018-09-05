<template>
    <div class="carouselWrap">
        <div class="carousel">
             <el-carousel height="460px" indicator-position="outside">
                <el-carousel-item v-for="(item, index) in bannerData['home']" :key="index">
                    <img class="img" :src="item" alt="banner">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import homeBanner1 from '@/assets/img/banner1.png'
import homeBanner2 from '@/assets/img/banner2.png'
    
export default {
    data() {
        return{
            bannerData: {
                home: [homeBanner1, homeBanner2]
            }
        }
    }
}
</script>

<style lang="scss"> 
.carouselWrap {  
    width: 100%;
    background: rgba(243,243,243,1);
    height: 490px;
    .carousel {
        width: 1100px;
        margin: 0 auto;
        height: 490px;
        .is-active {
            button {
                background: rgba(255,0,0,1);
            }
        }
        img {
            width: 100%;
            height: 100%;
        }
      
    }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.el-carousel__button{
    width: 60px !important;
    height: 4px !important;
}
</style>
