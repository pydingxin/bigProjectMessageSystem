<template>
     <n-popconfirm v-model:show="show">
        <template #trigger>
            <n-button>删除项目</n-button>
        </template>
        删除本项目及其表格数据？
        <template #action>
            <n-button size="small"   @click="confirmDelete">确认删除</n-button>
        </template>
      </n-popconfirm>
</template>

<script>
import { NPopconfirm,NButton } from 'naive-ui';
import { toRaw } from 'vue'

export default{
    props:['projectKeyProxy'],
    components:{
        NPopconfirm,NButton 
    },
    mounted(){
        this.projectKey= toRaw(this.projectKeyProxy);
    },
    data(){
        return{
            show:false,
            projectKey:'',
        }
    },
    methods:{
        confirmDelete(){
            this.show=false;
            console.log('delete confirm',this.projectKey);
            // 由专门的store执行
        },
    }
}
</script>