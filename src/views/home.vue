<template>
    <div class="home">
        <div>
            <div>
                常用功能
                <div class="common_functionality">
                    <div class="box" v-for="(item,i ) in box" :key="i">
                        <img :src="item.imgurl" alt="">
                        <span> {{item.title}} </span>
                    </div>
                </div>
                
            </div>
            <div>
                订单中心
                <div class="Order">
                    <div class="detailed">
                            <p>12</p>
                        <div>待派单</div>
                    </div>
                    <div class="detailed">
                        <span>12</span>
                        <div>待派单</div>
                    </div>
                    <div class="detailed">
                        <span>12</span>
                        <div>待派单</div>
                    </div>
                    <div class="detailed">
                        <span>12</span>
                        <div>待派单</div>
                    </div>
                    <div class="detailed">
                        <span>12</span>
                        <div>待派单</div>
                    </div>
                    <div class="detailed">
                        <span>12</span>
                        <div>待派单</div>
                    </div>
                    <div class="detailed">
                        <span>12</span>
                        <div>待派单</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        
    </div>
</template>
<script>
export default {
    name:"Home",
    components:{
    },
    data(){
        return{
            box:[
               {
                   imgurl:require("../assets/img/home/资料管理.png"),
                   title:'资料管理'
               },
               {
                   imgurl:require("../assets/img/home/交易明细.png"),
                   title:'交易明细'
               },
               {
                   imgurl:require("../assets/img/home/商家订单.png"),
                   title:'商家订单'
               },
               {
                   imgurl:require("../assets/img/home/服务单.png"),
                   title:'服务单'
               },
               {
                   imgurl:require("../assets/img/home/投诉单.png"),
                   title:'投诉单'
               },
               {
                   imgurl:require("../assets/img/home/问题单.png"),
                   title:'问题单'
               },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.home{
    background: #fff;
    >div{
        display: flex;
        flex: 1;
        // border: 1px solid black;
        // height: 300px;
        margin: 5px;
        >div{
            flex: 1;
            margin: 10px;
            box-sizing:border-box;
            border: 1px solid black;
        }
    }
}
.common_functionality{
    display: flex;
    flex-wrap: wrap;
}
.box{
    width: 78px;
    margin: 23px 15px;
    img{
        width: 78px;
        height: 78px;
    }
    span{
        height: 32px;
        line-height: 32px;
        display: block;
        text-align: center;
    }
}
.Order{
    display: flex;
    flex-wrap: wrap;
    >div{
        width: 78px;
        margin: 23px 15px;
    }
}
.detailed{
    p{
        height: 78px;
        line-height: 78px;
        text-align: center;
        vertical-align:text-bottom;
    }
    div {
        margin: 10px;
        text-align: center;
    }
    
}
</style>