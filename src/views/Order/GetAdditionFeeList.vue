<template>
  <div>附加费</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //列表数据
      alList:this.$store.state.list,
      //列表交互数据
      setData: {
        userID:"uid_7483a5012f7bf9ac1a000000",
        status:0,
        pageIndex: "1",
        pageSize: "1"
      }
    };
  },
  created() {    
    let setData = this.setData
    this.GetAdditionFeeList(setData);
  },
  methods: {
    ...mapActions("list", ["GetAdditionFeeList"])
  }
};
</script>