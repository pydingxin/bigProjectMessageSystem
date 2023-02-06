<template>
    <div  style="margin-top:0.5rem;margin-right:1rem">
        <n-space align="center" justify="end">
          <n-dropdown :options="options" trigger="hover"  @select="handleAvatarSelect">
            <n-space align="center" justify="end">
              <n-avatar
                round
                size="medium"
                :src="ManImg"
              />
              <span >平邑县教体局</span>
            </n-space>
          </n-dropdown>
      </n-space>
    </div>
</template>
    
<script>
import { h } from "vue";
import { NIcon } from "naive-ui";
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

import { NSpace,NAvatar,NDropdown,
} from 'naive-ui';

export default{
    components:{
        NSpace,NAvatar,NDropdown,
    },
    data(){
        return{
            ManImg,
        
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
            console.log(item); 
        }
    },
}
</script>

<style scoped>

</style>