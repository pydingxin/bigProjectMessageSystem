<template>

  <MyTable />
  <!-- <button type="button" @click="testbtn">click</button> -->

</template>

<script>
import { NButton } from 'naive-ui'

import MyTable from "./components/Table/MyTable.vue";

export default {
    components: {
      NButton,
      MyTable,
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

