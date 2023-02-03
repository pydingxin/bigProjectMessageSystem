<template>

  <AttachManage />
  <!-- <MyTable /> -->
  <!-- <button type="button" @click="testbtn">click</button> -->

</template>

<script>
import { NButton } from 'naive-ui';

import MyTable from "./components/Table/MyTable.vue";
import AttachManage from "./components/Attachment/Manage.vue";

export default {
    components: {
      NButton,
      MyTable,
      AttachManage,
    },
  data() {
    return {
      count:1,
    }
  },
  methods:{
    testbtn(){
    }
  }
}
</script>

