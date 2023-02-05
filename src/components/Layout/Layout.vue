<template>
    <n-layout>
      <n-layout-header bordered>
        颐和园路
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider   
          collapse-mode="width"
          :collapsed-width="15"
          :width="240"
          :show-collapsed-content="false"
          show-trigger="arrow-circle"
          bordered>
          
          <n-menu
            @update:value="handleMenuClick"
            :options="menuOptions"
            :default-expanded-keys="defaultExpandedKeys"
          />

        </n-layout-sider>
        <n-layout-content :native-scrollbar="true">
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </template>
  
<script>
import { NScrollbar,NButton,NLayout,NLayoutHeader,NLayoutContent,NLayoutFooter,NLayoutSider } from 'naive-ui';

let  menuOptions = [
        {
          label: "鱼",
          key: "fish",
          icon: renderIcon(FishIcon),
          children: [
            {
              label: "红烧",
              key: "braise",
              children: [
                {
                  label: "加辣",
                  key: "spicy"
                }
              ]
            },
            {
              label: "清蒸",
              key: "steamed",
              children: [
                {
                  label: "不要葱",
                  key: "no-green-onion"
                }
              ]
            }
          ]
        },
        {
          label: "熊掌",
          key: "bear-paw",
          icon: renderIcon(PawIcon),
          children: [
            {
              label: "保护野生动物",
              key: "protect-wild-animals"
            }
          ]
        },
        {
          label: "两个都要",
          key: "both",
          icon: renderIcon(BagOutlineIcon),
          children: [
            {
              label: "鱼和熊掌不可兼得",
              key: "can-not"
            }
          ]
        }
];
import { h } from "vue";
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
import { NMenu,NIcon } from "naive-ui";
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon
} from "@vicons/ionicons5";


export default{
  components:{
    NMenu,NScrollbar,NButton,NLayout,NLayoutContent,NLayoutFooter,NLayoutSider,NLayoutHeader
  },
  data(){
    return{
      title:'海淀桥',
      menuOptions,
      defaultExpandedKeys: ["fish", "braise"],
    }
  },
  methods:{
    handleMenuClick(key){
      console.log(key); //点击菜单栏的叶节点，获取key
    }
  },
}
</script>

  <style scoped>
  .n-layout-header {
    padding: 24px;
  }
  
  .n-layout-footer {
    padding: 24px;
  }
  </style>