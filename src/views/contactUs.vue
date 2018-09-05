                        
<template>
    <div class="introduce">
        <Header :tabIndex = '7'></Header>
        <PageCarousel></PageCarousel>
        <div class="introduceList clearfix">
            <p class="title">联系我们</p>
            <div class="maincontentWrap">
                <div class="maincontent">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>郑州佳和塑料彩印厂</span>
                        </div>
                        <p>
                            <span>公司名称: </span>
                            <span class="color">
                                郑州佳和塑料彩印厂
                            </span>
                        </p>
                        <p>
                            <span>公司地址: </span>
                            <span class="color">
                                郑州市金水区庙李镇渠东街中段
                            </span>
                        </p>
                        <p>
                            <span>联系人: </span>
                            <span class="color">
                                陈军
                            </span>
                        </p>
                        <p>
                            <span>联系方式: </span>
                            <span class="color">
                                13903811815 17737315017
                            </span>
                        </p>
                    </el-card>
                        <el-card class="box-card">
                             <div slot="header" class="clearfix">
                            <span>在线留言</span>
                        </div>
                        <el-form ref="form"  label-width="120px" label-position="left">
                            <el-form-item label="姓名">
                                <el-input>
                                    <i class="el-icon-edit el-input__icon" slot="suffix">
                                    </i>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="手机号">
                                <el-input>
                                     <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="姓名">
                                <el-input>
                                     <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="邮箱">
                                <el-input>
                                     <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="留言内容">
                                <el-input type="textarea" >
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="danger">提交</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </div>
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
        title: '联系我们'
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
        .maincontentWrap{
            width: 900px;
            padding: 0 100px;
            
            .box-card{
                margin: 40px 0;
                p{
                    line-height: 50px;
                    span{
                        display: inline-block;
                        width: 120px;
                    }
                    .color{
                        width: 500px;
                        color:rgba(212,0,0,1);
                    }
                }
                .el-input{
                    width: 300px;
                }
                .el-textarea{
                    width: 450px;
                }
            }
        }   
    }
}
</style>
