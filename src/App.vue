<template>
<Layout />

  <!-- <AttachManage /> -->
<!-- <ProjectManage /> -->
<!-- <div style="min-height: 20px;">hello</div> -->
  <!-- <MyTable /> -->
  <!-- <button type="button" @click="testbtn">click</button> -->

</template>

<script>
import { NButton } from 'naive-ui';

import MyTable from "./components/Table/MyTable.vue";
import AttachManage from "./components/Attachment/AttachmentManage.vue";
import ProjectManage from "./components/Project/ProjectManage.vue";
import Layout from "./components/Layout/Layout.vue";

export default {
    components: {
      NButton,
      MyTable,
      AttachManage,
      ProjectManage,
      Layout
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

