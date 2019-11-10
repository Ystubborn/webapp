<!--
 * @Author: your name
 * @Date: 2019-11-10 16:44:17
 * @LastEditTime: 2019-11-10 20:08:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webapp/webapp/src/views/Ordermessage/GetMerchantOrderList.vue
 -->
<template>
  <div>商户订单</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //列表数据
      alList:this.$store.state.list.state,
      //列表交互数据
      setData: {
        merchantID: "uid_7483a5012f7bf9ac1a000000",
        pageIndex: "1",
        pageSize: "1"
      }
    };
  },
  created() {
    let setData = {
      merchantID: "uid_7483a5012f7bf9ac1a000000",
      pageIndex: "1",
      pageSize: "1"
    };
    this.GetMerchantOrderList(setData);
  },
  methods: {
    ...mapActions("list", ["GetMerchantOrderList"])
  }
};
</script>
