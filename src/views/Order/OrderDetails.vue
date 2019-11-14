<template>
  <div>
    <div class="OD_bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商户订单</el-breadcrumb-item>
        <el-breadcrumb-item>{{disRoute}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="OD_tabs">
      <el-tabs type="border-card" @tab-click="jump">
        <el-tab-pane label="订单详情" @click.stop>    
                <OrderDetail></OrderDetail>
        </el-tab-pane>
        <template>
          <el-tab-pane v-for="i in TabRouter" :key="i.path" :label="i.label">
            <router-view></router-view>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import OrderDetail from './OrderMerchantDetail/OrderDetail'
export default {
	data() {
		return {
			disRoute: this.$router.history.current.meta.title,
			TabRouter: [
				{
					icon: 'el-icon-date',
					key: '2',
					label: '附加费详情',
					path: '/Order/OrderMerchantDetail/AddDetail',
					active: false
				},
				{
					icon: 'el-icon-date',
					key: '3',
					label: '报价详情',
					path: '/Order/OrderMerchantDetail/QuotedDetail',
					active: false
				},
				{
					icon: 'el-icon-date',
					key: '4',
					label: '补价详情',
					path: '/Order/OrderMerchantDetail/BootDetail',
					active: false
				}
			]
		};
    },
    components:{
        OrderDetail
    },
	methods: {
		jump(e) {
            if(e.$vnode.key){
                let path=e.$vnode.key
                this.$router.push(`${path}`)
            }	
		}
	}
};
</script>
<style lang="less" scoped>
.OD_bread {
	background: white;
	overflow: hidden;
	padding: 10px;
	width: 99%;
	border-radius: 5px;
}
.OD_tabs {
	margin-top: 10px;
}
</style>