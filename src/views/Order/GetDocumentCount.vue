<template>
  <div>退款单</div>
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
        merchantID: "uid_7483a5012f7bf9ac1a000000",
      }
    };
  },
  created() {
    let setData = this.setData
    this.GetDocumentCount(setData);
  },
  methods: {
    ...mapActions("list", ["GetDocumentCount"])
  }
};
</script>