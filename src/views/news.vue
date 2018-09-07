                        
<template>
    <div class="news">
        <Header :tabIndex = '6'></Header>
        <PageCarousel></PageCarousel>
        <div class="newsList clearfix">
            <p class="title">新闻中心</p>
            <div class="mainContent">
                <el-collapse accordion>
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div class="newsWrap">
                                <div class="newlistleft">
                                    <img src="../assets/img/new1.png" alt="product">
                                </div>
                                <div class="newlistRight">
                                    产品绿色彩印包装重在工艺和选材
                                </div>
                                <div class="date">
                                    2018-08-05
                                </div>
                            </div>
                        </template>
                        <p>
                            　　如今我们生活的环境面临着各种污染的威胁，各种有污染的工业产品无休止的生产，也给我们保护
                            环境增添了更多阻碍。在我们传统的彩印包装产品中，也不乏很多难降解的塑料制品。如今，绿色环保
                            生活已成为我们日常关注的重点，所以发展绿色产品彩印包装也是势在必行的。与传统的彩印包装技术
                            相比，新型的绿色彩印包装技术面临的问题也将更为严峻。而在这一环节中，工艺和选材也是尤为关键。
                        </p>
                        <p>
                            　　工艺方面：清洁的生产工艺是确保生产环节无污染的基础，对于我们的产品包装，不仅要有完善的
                            加工流程，合理的资源利用也是需要关注的。在整个生产流程中，尽可能的确保原料从投入到废物循环
                            利用中顺畅，减少对外排放的污染物。这样不仅提高资源的可利用率，还能从根本上杜绝“三废”产生。
                        </p>
                        <p>
                            　　选材方面：复合材料最大的缺点就是回收难，难在分离分层，而且在回收时复合材料如果混入单一
                            材料中，就将使单一材料的回收质量受到破坏，如铝纸塑复合材料混进单一纸板回收料中，就将破坏其
                            打浆性能。目前市场上主要使用的纸、塑料、金属、玻璃等包装材料在生产过程中也会造成一定的环境
                            污染，远远大于废弃后造成的环境污染。因此，为了使包装材料在其生命周期全过程中具有“绿色”性
                            能，就必须进行清洁生产。
                        </p>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template slot="title">
                            <div class="newsWrap">
                                <div class="newlistleft">
                                    <img src="../assets/img/new2.png" alt="product">
                                </div>
                                <div class="newlistRight">
                                    彩印包装将挑起特色产业大梁
                                </div>
                                <div class="date">
                                    2018-08-05
                                </div>
                            </div>
                        </template>
                        <p>
                            　　在经济快速增长的时代，各行业都开始开发新技术，一大批特色产业、特色项目都开始在各地兴起。
                            在食品加工、五金、建材等行业，一些大型企业都开始投入大资金开发新项目。在近几年的发展中，汽
                            模配、医药化工、彩印包装、建材、纺织服装、食品等七个行业已经成为了特色支柱产业。经济发展方
                            式的转变，让中国的特色产业不断做大，主导作用不断增强，成为经济增长的主动力。
                        </p>
                        <p>
                            　　就目前工业经济的发展态势而言，虽发展速度较快，但工业建设中的弱势局面并未改变。要想早日
                            实现工业经济的腾飞，发展和壮大特色产业和主导产业仍是我们首要解决的。据相关数据统计显示，在
                            目前七大特色产业中，汽摩配、五金工量具等主导产业集聚度明显提高，医药化工、纺织服装、新型建
                            材、食品加工、彩印包装等传统产业得到改造提升，七大特色产业优势日益显现、主导作用进一步增强。
                            未来几年，等待我们开发和创新的仍然很多，我们要做的就是不断追求更好。只有坚持不放弃，才能迎
                            来我们行业的新纪元。
                        </p>
                    </el-collapse-item>
                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="newsWrap">
                                <div class="newlistleft">
                                    <img src="../assets/img/new3.png" alt="product">
                                </div>
                                <div class="newlistRight">
                                    彩印包装行业一直呈现增长模式
                                </div>
                                <div class="date">
                                    2018-08-05
                                </div>
                            </div>
                        </template>
                        <p>
                            　　我国包装行业大而不强。我国近五年来，年均增长速度达18%左右，尤其是在2008年世界性的金融
                            危机形势下，中国包装工业仍保持了17%的增长速度。 但与发达国家包装行业的发展水平相比，我国的
                            包装行业还存在一些发展的瓶颈，还有待从“包装大国”向“包装强国”的转变。
                        </p>
                        <p>
                            　　我国纸彩印包装—已成世界第一大瓦楞纸箱生产国。纸制品包装发展速度一直比较快，以瓦楞纸箱
                            行业为例，我国2009年瓦楞纸箱类产品的总量已达367亿平方米，占世界总量的19.3%，亚洲总量的
                            30%。 塑料包装—在低迷的塑料行业中保持增长。根据塑料包装行业十二五规划，预计2010~2015年
                            规模以上企业塑料制品产量平均增速将超过12%;工业总产值平均增速超过15%;利润平均增速超过18%。
                        </p>
                        <p>
                            　　金属包装—百亿收入企业有望诞生。2015年金属包装总量突破1000亿元，平均增速8%-10%，金
                            属包装的100亿级企业可能诞生，行业集中度和大企业门槛将进一步提升。 彩印包装印刷—印刷业的主
                            要增长领域。“十一五”期间，印刷业总产值平均年增长率达19.34%，2011年我国印刷业总产值已占全
                            球的15%，总体规模接近世界第二，包装印刷领域是近年来快速增长的行业。
                        </p>
                        <p>
                            　　在互联网时代，随着消费不断升级，在新型产品、模式和渠道等的冲击下，传统制造业遭遇到极大
                            挑战，印刷行业就是其中一个典型行业：2013年，传统纸质印刷首现负增长(-1.5%)，同期数字出版营收
                            增长31.3%。2014年，传统纸质印刷跌幅继续扩大(-3.9%)，而数字印刷则加速增长(33.4%);彩票的传统
                            纸质销售近5年CAGR是18.65%，而无纸化渠道(互联网及移动互联网)是83.94%。在2015年2月开始行
                            业整顿之前，增速差距仍在显著扩大。
                        </p>
                    </el-collapse-item>
                    <el-collapse-item name="4">
                        <template slot="title">
                            <div class="newsWrap">
                                <div class="newlistleft">
                                    <img src="../assets/img/new4.png" alt="product">
                                </div>
                                <div class="newlistRight">
                                    彩印包装的几大注意事项
                                </div>
                                <div class="date">
                                    2018-08-05
                                </div>
                            </div>
                        </template>
                        <p>
                            　　彩印包装制作时，为了达到理想的色彩效果，油墨调配时需要特别注意。通过多年从事彩印包装制
                            作的经验，我们为大家介绍一下油墨调配时需要注意的事项：
                        </p>
                        <p>
                            　　一、确认彩印包装的主色调及所含的辅色调，主色调墨作为基本墨，其他墨作为调色墨，以基本墨
                            为主，调色墨为辅，这样调配专色油墨才会更快，更准确；
                        </p>
                        <p>
                            　　二、调墨辨色的光源，最理想为均匀白光，朝北窗口的自然光，及与自然光相近的人造光源，如日
                            光灯与白炽灯混合使用光源等；
                        </p>
                        <p>
                            　　三、调专色油墨，首先要调出油墨的饱和色相，打出薄薄的小样，万向联轴器确认不缺少主色调和
                            辅色调后，再用冲淡剂调至所需的专色。此外还需注意印刷工艺、水量、墨量控制、车速及印刷设备等，
                            应把握印刷及其规律，确保产品质量；
                        </p>
                        <p>
                            　　五、要考虑彩印包装色样周围环境的影响，避免对色彩产生错觉，在辨色时应将周围色遮盖掉，单
                            一观察，才不致于发生色偏。
                        </p>
                    </el-collapse-item>
                </el-collapse>
                
            </div>
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
        title: '新闻中心'
        }
    },
    components: {
        Header,
        PageCarousel,
        Footer
    }
}
</script>

<style lang="scss" >
.news{
    .newsList{
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
        .mainContent{
            width: 1000px;
            padding:  0 50px;
            margin: 40px auto 0 ;
            padding: 30px 0 ;
            .newsWrap{
                width: 100%;
                height: 100%;
                // display: flex;
                .newlistleft{
                    width: 80px;
                    height: 80px;
                    display: inline-block;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .newlistRight{
                    display: inline-block;
                    margin-left: 100px;
                    font-size: 18px;
                    color: rgba(212,0,0,1);
                }
                .date{
                    display: inline-block;
                    float: right;
                    margin-right: 50px; 
                    color: #ccc;
                }
            }
        }
    }
     
}
.el-collapse-item__header{
    line-height: 100px!important;
    height: 100px!important;
}
.el-collapse-item__arrow{
    line-height: 100px!important;
}
</style>
