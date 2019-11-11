<template>
        <el-table>
          <el-table-column
          v-for="info in column" :key="info.key"     
          :property="info.dataIndex"
          :label="info.title"
         >
             <template slot-scope="scope">
                   {{scope.row[scope.column.property]}} 
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
</template>
