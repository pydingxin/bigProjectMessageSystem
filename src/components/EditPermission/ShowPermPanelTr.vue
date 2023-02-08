<template>
    <tr>
        <td> {{perm.org_name    }}</td>
        <td> {{perm.project_name}}</td>
        <td> {{perm.column_name }}</td>
        <td> 
            <n-popconfirm v-model:show="show">
                <template #trigger>
                    <n-button>删除规则</n-button>
                </template>
                    确定删除？
                <template #action>
                    <n-button size="small"  @click="deletePerm">删除</n-button>
                </template>
            </n-popconfirm>
        </td>
    </tr>
</template>

<script>
import { NPopconfirm,NButton } from 'naive-ui';

export default {
    components:{
       NPopconfirm,NButton 
   },
    props:['perm'],
    data(){
        return {
            show:false,
        }
    },
    methods:{
        deletePerm(){
            console.log("delete perm",this.perm)
        },
    },
    mounted(){
    },
}
</script>