                        
<template>
    <div class="introduce">
        <Header :tabIndex = '2'></Header>
        <PageCarousel></PageCarousel>
        <div class="introduceList clearfix">
            <p class="title">佳和简介</p>
            <div class="maincontent">
                <p>
                    郑州佳和塑料彩印厂是一家专业生产和经营塑料包装的企业，技术力量雄厚，有近20年的生产经验。
                    主要产品包括各种塑料包装，真空包装袋、铝箔装、调料包装、农药包装、标签、种子包装、高温蒸煮
                    包装、纸包装、立体包装、拉链袋等各种塑料包装印刷产品。
                </p>
                <p>
                    郑州佳和塑料彩印厂拥有一批生产团队，高效的服务人员，在印刷行业以高质量，快速占领市场。
                    真诚为贵公司生产精美包装节约产品包装成本，达到共赢，期待与贵公司的合作，携手迈进成功。
                    郑州佳和塑料彩印厂要求严谨，采用高起点、守信用、重质量、积极开拓创新、追求卓越的路线，
                </p>
                <p>
                    用真诚来感动每一位客户，以质量及服务赢得每一位客户的信赖，业务在不断地扩大发展。同时，本公
                    司不断地完善管理，提高工作效率，降低制造成本，以合理的价格回报给每位客户，为各友好客商提供
                    满意的产品和周到的服务。
                </p>

                <p>
                    郑州佳和塑料彩印厂凭着以人为本科学管理的经营理念，崇尚诚信立业服务客户的经营宗旨，立足
                    品质优秀创新制胜的发展思路。竭诚欢迎国内外新老客户的光临指导。愿我们携手合作，共创未来。
                </p>
                <p class="contact">
                    欢迎新老客户致电！ 陈经理: 13903811815
                </p>
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
        title: '佳和简介'
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
.introduce{
    .introduceList{
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
        .maincontent{
            width: 1100px;
            margin: 40px auto 0;
            p{
                padding: 0 20px;
                font-size: 22px;
                line-height: 40px;
                text-indent: 25px;
            }
            .contact{
                color:#D40000;
            }
        }
        
    }
}
</style>
