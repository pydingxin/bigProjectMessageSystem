
<template>

    <n-input v-if="showThisPanel" v-model:value="org"  placeholder="输入单位" :style="{ width: '20%' }" />  &nbsp
    <n-input v-if="showThisPanel" v-model:value="user"  placeholder="输入账号"  :style="{ width: '20%' }" />&nbsp
    <n-input v-if="showThisPanel" v-model:value="pass"  placeholder="输入密码"  :style="{ width: '20%' }" />  &nbsp
    <n-button v-if="showThisPanel" @click="saveEdit"></n-button> &nbsp
    <n-button v-if="showThisPanel" @click="cancelEdit">取消添加</n-button>
</template>

<script>
import { NButton,NInput, } from 'naive-ui';
import naiveUiApi from '@/js/naiveUiApi.js'
import eventBus from '@/js/mittEventBus.js'
import{storeAccount} from '@/store/storeAccount.js'
export default{
    emits:['pointerenter', 'pointerleave'],
   components:{
       NButton ,NInput,
   },
   mounted(){
    eventBus.on("editAccount",orgkey=>{
        console.log("in AccountEditPanel.vue mounted(),editAccount event,orgkey=",orgkey);
        let m=storeAccount.getOrgMsgByKey(orgkey);
        console.log("in AccountEditPanel.vue, m=",m);
        [this.org,this.user,this.pass] = [m.org,m.user,m.pass]
        this.showThisPanel=true;
    })
   },
   data(){
       return{
            showThisPanel:false,
            org:"",
            user:"",
            pass:"",
       }
   },
   methods:{
    cancelEdit(){
        this.showThisPanel=!this.showThisPanel;
    },
       async saveEdit(){
            if(false===this.showThisPanel){
                this.buttonContent= "确认添加"
                this.showThisPanel=!this.showThisPanel;
            }else{
                //添加操作
                let done= await this.confirmEditAccount();
                if(done){
                    naiveUiApi.notifySuccess("编辑成功")
                    this.showThisPanel=!this.showThisPanel;
                }else{
                    naiveUiApi.notifySuccess("编辑失败")
                }
            }
       },
       async confirmEditAccount(){
        //与api交互，执行
            return new Promise(resolve =>{
                console.log("Edit Account",this.org, this.user, this.pass);
                setTimeout(()=>{resolve(true);},2000);
            })
       },
      
   }
}
</script>