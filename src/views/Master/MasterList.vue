<template>
  <div>
    <el-table>
        <el-table-column
          v-for="info in column" :key="info.key"     
          :property="info.dataIndex"
          :label="info.title"
         >
             <template slot-scope="scope">
                   {{scope.row[scope.column.property]}}  <!-- 渲染对应表格里面的内容 -->
              </template>
          </el-table-column>
          <el-table-column label="启用状态">
                <template slot-scope="scope">
                        <el-switch
                          v-model="scope.row.ifUse"
                          :active-color="ACT_COLOR"
                          :inactive-color="INACT_COLOR">
                        </el-switch>
                  </template>
             </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	data() {
		return {
      getData:{
        organizationID:'425035663272972289',
        phone:'13999703224'
      },
			column: [
				{
					title: '师傅ID',
					dataIndex: 'unitName',
					key: 'unitName'
				},
				{
					title: '姓名',
					dataIndex: 'price',
					key: 'price'
				},
				{
					title: '电话',
					dataIndex: 'qty',
					key: 'qty'
				},
				{
					title: '服务区域',
					dataIndex: 'amount',
					key: 'amount'
				},
				{
					title: '服务类型',
					dataIndex: 'a',
					key: 'a'
				},
				{
					title: '保证金',
					dataIndex: 'b',
					key: 'b'
				},
				{
					title: '此处空白',
					dataIndex: 'c',
					key: 'c'
				},
				{
					title: '认证状态',
					dataIndex: 'd',
					key: 'd'
				}
      ]
      
		};
  },
  created(){
this.MasterSearch(this.getData)
  },
  methods:{
    ...mapActions("list",['MasterSearch'])
  }
};
</script>