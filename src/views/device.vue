<template>
    <div class="device">
        <Header :tabIndex = '4'></Header>
        <PageCarousel></PageCarousel>
        <div class="deviceList clearfix">
            <p class="title">厂房设备</p>
            <ul>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail1.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(1)
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail2.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(2)
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail3.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(3)
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail4.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(4)
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail5.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(5)
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail6.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(6)
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail7.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(7)
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/deviceDetail8.png" alt="device">
                </div>
                <div class="titles">
                  厂房设备(8)
                </div>
              </li>
            </ul>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/pageHeader.vue'
import PageCarousel from '@/components/pageCarousel.vue'
import Footer from '@/components/pageFooter.vue'

export default {
    data() {
        return {
        title: '产品'
        }
    },
    components: {
        Header,
        PageCarousel,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.device{
    .deviceList{
        width: 1100px;
        margin: 0px auto;
        padding-bottom: 40px;
        border-bottom: 1px solid  rgba(0,0,0,.15);
        .title{
            padding: 30px;
            color:rgba(212,0,0,1);
            font-size: 30px;
            text-align: center;
            position: relative;
            border-bottom: 1px solid  rgba(0,0,0,.15);
            &:before{
                content: "";
                width: 40px;
                height: 3px;
                background:#4E6990;
                position: absolute;
                right: 420px;
                top: 50%;
            }
            &:after{
                content: "";
                width: 40px;
                height: 3px;
                background:#4E6990;
                position: absolute;
                left: 420px;
                top: 50%;
            }
        }
        ul{
          li{
            width: 242px;
            height: 232px;
            margin-right: 44px;
            margin-top:44px; 
            float: left; 
            &:nth-of-type(4n){
              margin-right: 0; 
            }
            .imgWrap{
              width: 240px;
              height: 180px;
              border:  1px dashed #010101;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .titles{
              width: 100%;
              height: 40px;
              line-height: 40px;
              text-align: center;
              background: #010101;
              color: #fff;
            }
          }
        }
    }
}
</style>
