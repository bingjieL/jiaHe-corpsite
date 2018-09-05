                        
<template>
    <div class="cooperation">
        <Header :tabIndex = '5'></Header>
        <PageCarousel></PageCarousel>
        <div class="cooperationList clearfix">
            <p class="title">合作伙伴</p>
            <div class="mainImgWrap">
                <img src="../assets/img/cooperation.png" alt="cooperation">
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
.cooperation{
    .cooperationList{
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
        .mainImgWrap{
            width: 825px;
            height: 390px;
            margin: 40px auto 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
        
    }
}
</style>
