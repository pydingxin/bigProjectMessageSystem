<template>
    <n-layout>
      <n-layout-header bordered>
        <Header />
      </n-layout-header>

      <n-layout has-sider>
        <n-layout-sider   
          :collapsed-width="22"
          :collapsed-icon-size="22"
          collapse-mode="width"
          :show-collapsed-content="false"
          show-trigger="arrow-circle">
          <Sider />
        </n-layout-sider>

        <n-layout-content>
          <Content />
        </n-layout-content>

      </n-layout>
    </n-layout>
  </template>
  
<script>
import { NScrollbar,NButton,NLayout,NLayoutHeader,
  NLayoutContent,NLayoutFooter,NLayoutSider,NAvatar,NDropdown,
} from 'naive-ui';
import Sider from  './Sider.vue'
import Header from  './Header.vue'
import Content from  './Content.vue'


export default{
  components:{
    Sider,Header,Content,NScrollbar,NButton,NLayout,NAvatar,
    NLayoutContent,NLayoutFooter,NLayoutSider,NLayoutHeader,NDropdown,
  },
  data(){
    return{
    }
  },

}
</script>

  <style scoped>
  .n-layout-header {

  }
  
  .n-layout-footer {

  }
  </style>