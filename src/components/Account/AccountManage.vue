<template>
    <div>
        <AddPanel />
        <EditPanel />    
        <div style="height:0.2rem"></div>
        <n-data-table :columns="columns" :data="allOrgMsgs" :pagination="pagination" />
    </div>
    <!-- {{ allOrgMsgs  }} -->
</template>

<script>
import {storeAccount} from '@/store/storeAccount.js'
import { h, } from "vue";
import { NInput,NDataTable,NButton } from "naive-ui";
import AccountDeleteButton from './DeleteButton.vue'
import AccountEditButton from './EditButton.vue'
import EditPanel from './EditPanel.vue'
import AddPanel from './AddPanel.vue'

export default {
    emits:['pointerenter', 'pointerleave'],
    components: {
        NInput,NDataTable,NButton,
        AddPanel,
        EditPanel 
    },
    data(){
        return {
            allOrgMsgs: [],
            columns:[
                {
                    title: "单位",
                    key: "org_name",
                },
                {
                    title: "账号",
                    key: "org_user",
                },
                {
                    title: "密码",
                    key: "org_pass",
                },
                {
                    title: "",
                    key: "edit",
                    render(row) {
                        return h(
                            AccountEditButton,
                            {
                                accountKeyProxy: row.org_key,
                            },
                            { default: () => "编辑账号" }
                        );
                    }
                },
                {
                    title: "",
                    key: "delete",
                    render(row) {
                        return h(
                            AccountDeleteButton,
                            {
                                accountKeyProxy: row.org_key,
                            },
                            { default: () => "删除账号" }
                        );
                    }
                }
            ],
            pagination: {
                pageSize: 10
            }
        }
    },
    mounted(){
        this.allOrgMsgs = storeAccount.getAllOrgAccountMsg()
    },
    methods:{
        addAccount(){
            console.log("addAccount")
        },
    },
}
</script>

<style scoped>
:deep(.n-data-table-th) {
    text-align: left;
    font-weight: 900;
    color: #fff;
    background-color: #0074d9;
    font-size: 1.2em;
    padding: .3em 2.4em .3em .6em;
}
:deep(.n-data-table-td){
    font-size: 1.1em;
}
</style>