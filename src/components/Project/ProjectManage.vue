<template>
    <NButton>添加项目</NButton>
    <NButton>查找项目</NButton>
      <n-data-table
        :columns="columns"
        :data="tableDataOnShow"
        :pagination="pagination"
        :bordered="true"
    />
</template>

<script>
import { h} from "vue";
import { NDataTable,NButton } from 'naive-ui';
import {storeTable} from '@/store/storeGlobalTable.js'
import ProjectDeleteButton from "./ProjectDeleteButton.vue";


export default{
    components: {
        NDataTable,NButton,ProjectDeleteButton
    },
    methods:{
        play(row) {
         console.log(`Play ${row.title}`);
        },
        refreshProjectMsg(){
            //每行的key都是项目key，可以用这个key删除项目
            this.tableData = storeTable.get_projectManage_msg()
        },
    },
    mounted(){
        this.refreshProjectMsg()
        this.tableDataOnShow = this.tableData;
    },
    data(){
        return{
            columns:[
                {
                    title: "项目名",
                    key: "projectName"
                },
                {
                    title: "操作",
                    key: "actions",
                    render(row) {
                        return h(
                            ProjectDeleteButton,
                            {
                                projectKeyProxy: row.key,
                            },
                            { default: () => "删除项目" }
                        );
                    }
                    
                }
            ],
            tableDataOnShow:[],
            tableData:[],
            pagination: true,
        }
    }
}
</script>