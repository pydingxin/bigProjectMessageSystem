<template>
<component :is="selectedContentComponent"></component>
</template>

<script>
import eventBus from '@/js/mittEventBus.js'

import MyTable from "@/components/Table/MyTable.vue";
import AttachmentManage from "@/components/Attachment/AttachmentManage.vue";
import ProjectManage from "@/components/Project/ProjectManage.vue";
export default{
    components:{
        MyTable,AttachmentManage,ProjectManage
    },
    data(){
        return{
            selectedContentComponent:"MyTable",
        }
    },
    mounted(){
        let that=this;
        eventBus.on('changeContentComponent',componentName=>{
            that.selectedContentComponent=componentName;
        })
        
    },
}
</script>