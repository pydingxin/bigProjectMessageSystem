<template>
    <div id="container" style="display:flex;align-items: center;justify-content:space-between;">
          <h3 style="color:whitesmoke;margin:0.2rem">
              &nbsp&nbsp欢迎使用平邑县重点项目生命周期管理系统
          </h3>
        <n-dropdown :options="options" trigger="hover"  @select="handleAvatarSelect">
            <div style="display:flex;align-items: center;">
              <n-avatar round size="medium" :src="ManImg" />
              <span style="width:0.4rem"></span>
              <span style="font-size: medium;color:white">{{ thisOrg.org_name }}</span>
            </div>
        </n-dropdown>
    </div>
</template>
    
<script>
import { h } from "vue";
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

import  ManImg from './man.webp'

import { NSpace,NAvatar,NDropdown,NIcon
} from 'naive-ui';

import {storeAccount} from '@/store/storeAccount.js'

export default{
    components:{
      NSpace,NAvatar,NDropdown,NIcon
    },
    mounted(){
      this.thisOrg = storeAccount.getThisOrgAccountMsg()
      
    },
    data(){
        return{
            ManImg,
            thisOrg:{},
            options: [
                {
                    label: "我的权限",
                    key: "showMyEditPermissions",
                    icon: renderIcon(UserIcon)
                },
                {
                    label: "退出登录",
                    key: "logout",
                    icon: renderIcon(LogoutIcon)
                }
            ],
        }
    },
    methods:{
        handleAvatarSelect(item){
            console.log(item,this.thisOrg.org_name); 
        }
    },
}
</script>

<style scoped>
#systemTitle{
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
}

#container {
  display:flex;
  justify-content:end;
  align-items:center;
  background-color:#36ad6a;
  padding:0.2rem;
  padding-right: 1rem;
  margin-bottom: 0.4rem;
}
</style>