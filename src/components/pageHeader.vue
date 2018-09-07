<template>
    <header class="header">
        <div class="headerTip">
            网站公告：本厂是河南大型彩印厂家，主要生产真空包装、铝箔包装、调料包装、农药包装、分类标签、种子包装、拉链袋、高温蒸煮包装等各种塑料包装，欢迎各位新老客户莅临参观。
        </div>
        <div class="contentWrap">
            <div class="content">
                <div class="logo">
                    <router-link to="/">
                        <img src="../assets/img/logo.png" alt="logo">
                    </router-link>
                </div>
                <div class="phone">
                    <div class="phoneLogo">
                        <img src="../assets/img/phone.png" alt="phone">
                    </div>
                    <div class="phoneContent">
                        <div class="title">
                            全国热线电话
                        </div>
                        <div class="phoneMain">
                            13837168191
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navWrap">
            <div class="nav">
                <ul>
                    <li :class="tabIndex=='1' ?'checked':''">
                        <router-link to="/">
                            网站首页
                        </router-link>
                    </li>
                    <li :class="tabIndex=='2' ?'checked':''">
                        <router-link to="/Introduce">
                            佳和简介
                        </router-link>
                    </li>
                    <li :class="tabIndex=='3' ?'checked':''">
                        <router-link to="/Product">
                            产品展示
                        </router-link>
                    </li>
                    <li :class="tabIndex=='4' ?'checked':''">
                        <router-link to="/Device">
                            厂房设备
                        </router-link>
                    </li>
                    <li :class="tabIndex=='5' ?'checked':''">
                        <router-link to="/Cooperation">
                            合作伙伴
                        </router-link>
                    </li>
                    <li :class="tabIndex=='6' ?'checked':''">
                        <router-link to="/news">
                            新闻中心
                        </router-link>
                    </li>
                    <li :class="tabIndex=='7' ?'checked':''">
                        <router-link to="/contactUs">
                            联系我们
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props: {
        tabIndex:{
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    .headerTip{
        width: 100%;
        height: 30px;
        background: rgba(0,0,0,1);
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
    }
    .contentWrap{
        width: 100%;
        .content{
            width: 1100px;
            margin: 0 auto;
            height: 90px;
            display: flex;
            justify-content: space-between;
            .logo{
                width: 280px;
                height: 60px;
                margin: 15px 40px; 
                cursor: pointer;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .phone{
                margin: 20px 40px;
                display: flex;
                .phoneLogo{
                    width: 40px;
                    height: 40px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .phoneContent{
                    width: 125px;
                    margin-left:15px;
                    font-size: 16px;
                    line-height: 20px;
                    .title{
                        color:rgba(0,0,0,1);
                    } 
                    .phoneMain{
                        color:rgba(255,0,0,1);
                    }
                }
            }
        }
    }
    .navWrap{
        width: 100%;
        height: 60px;
        background: #D40000;
        .nav{
            width: 1100px;
            height: 100%;
            margin: 0 auto;
            li{
                padding: 0 27px;
                line-height: 60px;
                float: left;
                color: #fff;
                // font-weight: 200px;
                font-size: 16px;
                cursor: pointer;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                }
            }
            li.checked{
                background: black;   
            }
        }
    }
}
</style>
