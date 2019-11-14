<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <template v-for="i in items">
        <el-submenu :index="i.index" :key="i.index">
          <template slot="title">
            <i :class="i.icon"></i>
            <span slot="title">{{i.title}}</span>
          </template>
          <template v-for="sub in i.subs">
            <el-menu-item-group :key="sub.index">
              <router-link :to="sub.index">
                <el-menu-item :index="sub.index">{{sub.title}}</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import bus from '../common/bus';
export default {
	data() {
		return {
			isCollapse: true,
			collapse: false,
			items: [
				{
					icon: 'el-icon-lx-home',
					index: '1',
					title: '工作台',
					subs: [
						{
							index: '/',
							title: '首页'
						}
					]
				},
				{
					icon: 'el-icon-lx-cascades',
					index: '2',
					title: '订单详情',
					subs: [
						{
							index: '/Order/GetMerchantOrderList',
							title: '客户订单'
						},
						{
							index: '/Order/GetAdditionFeeList',
							title: '附加费单'
						},
						{
							index: '/Order/GetServiceChangeList',
							title: '补价单'
						},
						{
							index: '/Order/GetDocumentCount',
							title: '退款单'
						},
						{
							index: '/Order/GetFeedBackList',
							title: '问题单'
						}
					]
				},
				{
					icon: 'el-icon-lx-copy',
					index: '3',
					title: '资金管理',
					subs: [
						{
							index: '/ho/wallet',
							title: '我的钱包'
						},
						{
							index: '/ho/expenditure',
							title: '收入'
						},
						{
							index: '/ho/income',
							title: '支出'
						}
					]
				},
				{
					icon: 'el-icon-lx-copy',
					index: '4',
					title: '师傅管理',
					subs: [
						{
							index: '/Master/MasterList',
							title: '师傅列表'
						},
						{
							index: '/Master/Workteam',
							title: '团队管理'
						}
					]
				},
				{
					icon: 'el-icon-lx-copy',
					index: '5',
					title: '商家管理',
					subs: [
						{
							index: '/Merchantmanagement/PersonBase',
							title: '资料管理'
						}
					]
				}
			]
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	computed: {
		onRoutes() {
			return this.$route.path.replace('/', '');
		}
	},
	created() {
		// 通过 Event Bus 进行组件间通信，来折叠侧边栏
		bus.$on('collapse', msg => {
			this.collapse = msg;
			bus.$emit('collapse-content', msg);
		});
	}
};
</script>

<style scoped>
.sidebar {
	display: block;
	position: absolute;
	left: 0;
	top: 70px;
	bottom: 0;
	overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
	width: 250px;
}
.sidebar > ul {
	height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;

	min-height: 400px;
}
</style>
