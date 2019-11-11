<template>
  <div>商户订单</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //列表数据
      alList:this.$store.state.list.orderShowDTOList,
      //列表交互数据
      setData: {
        merchantID: "uid_7483a5012f7bf9ac1a000000",
        pageIndex: "1",
        pageSize: "1"
      }
    };
  },
  created() {
    let setData =this.setData
    this.GetMerchantOrderList(setData);
  },
  methods: {
    ...mapActions("list", ["GetMerchantOrderList"])
  }
};
</script>
