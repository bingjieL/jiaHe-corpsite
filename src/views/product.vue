<template>
    <div class="product">
        <Header :tabIndex = '3'></Header>
        <PageCarousel></PageCarousel>
        <div class="productList clearfix">
            <p class="title">产品展示</p>
            <ul>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product2.png" alt="product">
                </div>
                <div class="titles">
                  米醋标签
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product3.png" alt="product">
                </div>
                <div class="titles">
                  化肥包装
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product1.png" alt="product">
                </div>
                <div class="titles">
                  腻子粉袋
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product4.png" alt="product">
                </div>
                <div class="titles">
                  洗衣粉袋
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product5.png" alt="product">
                </div>
                <div class="titles">
                  米线包装
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product6.png" alt="product">
                </div>
                <div class="titles">
                  食品包装
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product7.png" alt="product">
                </div>
                <div class="titles">
                  食品包装
                </div>
              </li>
              <li>
                <div class="imgWrap">
                  <img src="../assets/img/product8.png" alt="product">
                </div>
                <div class="titles">
                  日常用品包装
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
.product{
    .productList{
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
