<template>
    <div class="homePage">
      <Header :tabIndex = '1'></Header>
      <PageCarousel></PageCarousel>
      <!-- about us -->
      <div class="aboutUsWarp">
        <div class="aboutUs">
          <div class="logo">
            <img src="../assets/img/aboutUs-logo.png" alt="aboutUs-logo">
          </div>
          <div class="content"> 
            <p class="title">郑州佳和塑料彩印厂</p>
            <p class="main">
              郑州佳和塑料彩印厂是一家专业生产和经营塑料包装的企业,<br />
              技术力量雄厚,有近20年的生产经验。主要产品包括各种塑料包装,<br />
              真空包装袋、铝箔装、调料包装、农药包装、标签、种子包装、高<br />
              温蒸煮包装、纸包装、立体包装、拉链袋等各种塑料包装印刷产品。
            </p>
            <p class="main"> 
              郑州佳和塑料彩印厂拥有一批生产团队,高效的服务人员,在<br />
              印刷行业以高质量,快速占领市场。真诚为贵公司生产精美包装节<br />
              约产品包装成本,达到共赢,期待与贵公司的合作,携手迈进成功。
            </p>
          </div>
        </div>
      </div>
      <!-- product -->
      <div class="productWrap .clearfix">
        <div class="product">
          <div class="titleEn">PRODUCT DISPLAY</div>
          <div class="title">
            产品展示
          </div>
          <div class="content">
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
              <li style="margin:0;">
                <div class="imgWrap">
                  <img src="../assets/img/product5.png" alt="product">
                </div>
                <div class="titles">
                  米线包装
                </div>
              </li>
            </ul>
          </div>
          <div class="more">
            <el-button @click="goTopage('product')"><i class="el-icon-plus"></i> 查看更多</el-button>
          </div>
        </div>
      </div>
      <!-- new  -->
      <div class="newWrap .clearfix">
        <div class="new ">
          <div class="titleEn">NEWS CENTER</div>
          <div class="title">
            新闻中心
          </div>
          <div class="content">
            <ul>
              <li>
                <div class="newlistleft">
                  <img src="../assets/img/new1.png" alt="product">
                </div>
                <div class="newlistRight">
                  <p class="titles">
                    <span class="titleLeft">
                      产品绿色彩印包装重在工艺和选材
                    </span>
                    <span class="titleRight">
                      2018-08-05
                    </span>
                  </p>
                  <p class="content">
                        如今我们生活的环境面临着各种污染的威胁，各种有污染
                    的工业产品无休止的生产，也给我们保护环境增添了更多阻碍。
                    在我们传统的彩印包装产品中，也不乏很多难降解的塑料制品。
                    如今，绿色环保生活已成为我们日常关注的重点，所以发......
                  </p>
                </div>
              </li>
              <li>
                <div class="newlistleft">
                  <img src="../assets/img/new2.png" alt="product">
                </div>
                <div class="newlistRight">
                  <p class="titles">
                    <span class="titleLeft">
                      彩印包装将挑起特色产业大梁
                    </span>
                    <span class="titleRight">
                      2018-08-05
                    </span>
                  </p>
                  <p class="content">
                        在经济快速增长的时代，各行业都开始开发新技术，一大批
                    特色产业、特色项目都开始在各地兴起。在食品加工、五金、
                    建材等行业，一些大型企业都开始投入大资金开发新项目。在
                    近几年的发展中，汽模配、医药化工、彩印包装、建材......
                  </p>
                </div>
              </li>
               <li>
                <div class="newlistleft">
                  <img src="../assets/img/new3.png" alt="product">
                </div>
                <div class="newlistRight">
                  <p class="titles">
                    <span class="titleLeft">
                      彩印包装行业一直呈现增长模式
                    </span>
                    <span class="titleRight">
                      2018-08-05
                    </span>
                  </p>
                  <p class="content">
                        我国包装行业大而不强。我国近五年来，年均增长速度达
                    18%左右，尤其是在2008年世界性的金融危机形势下，中国包
                    装工业仍保持了17%的增长速度。 但与发达国家包装行业的发
                    展水平相比，我国的包装行业还存在一些发展的瓶颈，还......
                  </p>
                </div>
              </li>
               <li>
                <div class="newlistleft">
                  <img src="../assets/img/new4.png" alt="product">
                </div>
                <div class="newlistRight">
                  <p class="titles">
                    <span class="titleLeft">
                      彩印包装的几大注意事项
                    </span>
                    <span class="titleRight">
                      2018-08-05
                    </span>
                  </p>
                  <p class="content">
                        彩印包装制作时，为了达到理想的色彩效果，油墨调配时
                    需要特别注意。通过多年从事彩印包装制作的经验，我们为大
                    家介绍一下油墨调配时需要注意的事项：<br />
                    　　一、确认彩印包装的主色调及所含的辅色调，主色调......
                  </p>
                </div>
              </li>
            </ul> 
          </div>
          <div class="more">
            <el-button @click="goTopage('news')"><i class="el-icon-plus"></i> 查看更多</el-button>
          </div>
        </div>
      </div>
      <!-- device -->
      <div class="deviceWrap .clearfix">
        <div class="device">
          <div class="titleEn">PLANT AND EQUIPMENT</div>
          <div class="title">
            厂房设备
          </div>
          <div class="content">
            <ul>
              <li>
                <div class="deviceImgWrap">
                  <img src="../assets/img/device1.png" alt="product">
                </div>
              </li>
              <li>
                <div class="deviceImgWrap">
                  <img src="../assets/img/device2.png" alt="product">
                </div>
              </li>
              <li>
                <div class="deviceImgWrap">
                  <img src="../assets/img/device3.png" alt="product">
                </div>
              </li>
            </ul> 
          </div>
          <div class="more">
            <el-button @click="goTopage('Device')"><i class="el-icon-plus"></i>查看更多</el-button>
          </div>
        </div>
      </div>
      <!-- footer -->
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
      title: '首页'
    }
  },
  components: {
    Header,
    PageCarousel,
    Footer
  },
  methods: {
    goTopage(type){
      let url = '/'
      if(type == 'product'){
        url = '/product'
      }else if(type == 'news'){
        url = '/news'
      }else if(type == 'Device'){
        url =  '/Device'
      }
      this.$router.push(url)
    }
  }
} 
</script>

<style lang="scss" scoped>
.homePage{
  .aboutUsWarp{
    width: 100%;
    height: 450px;
    .aboutUs{
      width: 1100px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 350px;
        height: 260px;
        margin: 95px 0;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .content{
        margin: 95px 40px;
        .title{
          color: #4E6990;
          font-size: 24px;
          height: 60px;
        }
        .main{
          line-height: 25px;
          text-indent: 25px;
          font-size: 16px;
          margin-bottom: 20px;
          color: #010101; 
          letter-spacing: 1px;
        }
      }
    }
  }
  .productWrap{
    width: 100%;
    background: #F3F3F3;
    .product{
      width: 1100px;
      margin: 0 auto;
      .titleEn{
        font-size: 26px;
        color:rgba(78,105,144,1);
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      .title{
        color:rgba(212,0,0,1);
        font-size: 30px;
        text-align: center;
        position: relative;
        &:before{
          content: "";
          width: 40px;
          height: 1px;
          background:#4E6990;
          position: absolute;
          right: 420px;
          top: 50%;
        }
        &:after{
          content: "";
          width: 40px;
          height: 1px;
          background:#4E6990;
          position: absolute;
          left: 420px;
          top: 50%;
        }
      }
      .content{
        width: 100%;
        margin-top: 40px; 
        ul{
          li{
            width: 200px;
            height: 240px;
            margin-right: 25px;
            float: left; 
            .imgWrap{
              width: 198px;
              height: 198px;
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
  }
  .newWrap{
    width: 100%;
    background: #fff;
    .new{
      width: 1100px;
      margin: 0 auto;
      // height: 500px;
      .titleEn{
        font-size: 26px;
        color:rgba(78,105,144,1);
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      .title{
        color:rgba(212,0,0,1);
        font-size: 30px;
        text-align: center;
        position: relative;
        &:before{
          content: "";
          width: 40px;
          height: 1px;
          background:#4E6990;
          position: absolute;
          right: 420px;
          top: 50%;
        }
        &:after{
          content: "";
          width: 40px;
          height: 1px;
          background:#4E6990;
          position: absolute;
          left: 420px;
          top: 50%;
        }
      }
      .content{
        width: 100%;
        ul{
          li{
            width: 490px;
            height: 120px;
            padding: 20px;
            background:rgba(247,247,247,1);
            border:1px solid rgba(231,231,231,1);
            float: left;
            display: flex;
            margin-top: 35px; 
            margin-right: 35px; 
            &:nth-of-type(2n){
              margin-right: 0px; 
            }
            .newlistleft{
              width: 150px;
              height: 120px;
              margin-right:20px;
              img{
                width: 100%;
                height: 100%;
              } 
            }
            .newlistRight{
              flex: 1;
              .titles{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .titleLeft{
                  display: block;
                  font-size: 12px;
                  color:rgba(78,105,144,1);
                }
                .titleRight{
                  display: block;
                  font-size:12px;
                  color:rgba(1,1,1,1);
                  opacity:0.5;
                }
              }
              .content{
                margin-top: 8px;
                font-size:12px;
                text-indent: 15px;
                color:rgba(0,0,0,1);
                line-height:20px;
              }
            }
          }
        }
      }
    }
  }
  .deviceWrap{
    width: 100%;
    background: #F3F3F3;
    .device{
      width: 1100px;
      margin: 0 auto;
      .titleEn{
        font-size: 26px;
        color:rgba(78,105,144,1);
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      .title{
        color:rgba(212,0,0,1);
        font-size: 30px;
        text-align: center;
        position: relative;
        &:before{
          content: "";
          width: 40px;
          height: 1px;
          background:#4E6990;
          position: absolute;
          right: 420px;
          top: 50%;
        }
        &:after{
          content: "";
          width: 40px;
          height: 1px;
          background:#4E6990;
          position: absolute;
          left: 420px;
          top: 50%;
        }
      }
      .content{
        width: 100%;
        margin-top: 40px; 
        ul{
          li{
            width: 350px;
            height: 350px;
            float: left;
            &:nth-of-type(2n){
              margin: 0 25px;
            }
            .deviceImgWrap{
              width: 100%;
              height: 100%;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  .more{
    text-align: center;
    button{
      width: 250px;
      margin: 30px;
      color:#4E6990;
    }
  }
}
</style>
