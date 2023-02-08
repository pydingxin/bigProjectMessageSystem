<template>

    <table type="primary">
        <thead>
            <tr>
                <th>单位</th>
                <th>行</th>
                <th>列</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <ShowPermPanelTr v-for="p in OPCNamePerms" :perm="p"/>
        </tbody>
    </table>
</template>

<script>
import {storeEditPermissions} from "@/store/storeEditPermission.js"
import {storeTable} from "@/store/storeGlobalTable.js"
import {storeAccount} from '@/store/storeAccount.js'

import ShowPermPanelTr from './ShowPermPanelTr.vue'
export default {
    components:{
        ShowPermPanelTr
    },
    data(){
        return {
            projectKeyNameMap:{},
            columnKeyNameMap:{},
            accountKeyNameMap:{},
            OPCkeyPerms:[], //简单规则列表
            OPCNamePerms:[], //详细规则列表
        }
    },
    methods:{
        refreshData(){
            this.projectKeyNameMap = storeTable.getProjectKeyNameMap();
            this.columnKeyNameMap  = storeTable.getColumnKeyNameMap();
            this.accountKeyNameMap = storeAccount.getAccountKeyNameMap();
            this.OPCkeyPerms = storeEditPermissions.getAllOrgProjectColumnKeyPerms();
            // 用上边四个生成详细的规则OPCNamePerms：
            let that=this;
            that.OPCNamePerms= that.OPCkeyPerms.map(p=>({
                perm_id:p.perm_id,
                
                project_key: p.project_key, 
                project_name: that.projectKeyNameMap[p.project_key]??"所有行",
                
                org_key:p.org_key, 
                org_name:that.accountKeyNameMap[p.org_key]??"所有单位",

                column_key: p.column_key,
                column_name:that.columnKeyNameMap[p.column_key]??"所有列",
            }))
        },
    },
    mounted(){
        this.refreshData();
    },
}
</script>
