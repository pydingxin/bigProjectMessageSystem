<template>
    edit permissin<br/><br/>
   {{ projectKeyNameMap }}
   <br/><br/>
   {{ columnKeyNameMap }}
   <br/><br/>
   {{ accountKeyNameMap }}
   <br/><br/>
   {{ OPCkeyPerms }}
   <br/><br/>
   {{ OPCNamePerms }}
</template>

<script>
import {storeEditPermissions} from "@/store/storeEditPermission.js"
import {storeTable} from "@/store/storeGlobalTable.js"
import {storeAccount} from '@/store/storeAccount.js'

export default {
    data(){
        return {
            projectKeyNameMap:{},
            columnKeyNameMap:{},
            accountKeyNameMap:{},
            OPCkeyPerms:[],
            OPCNamePerms:[],
        }
    },
    methods:{
        refreshData(){
            this.projectKeyNameMap = storeTable.getProjectKeyNameMap();
            this.columnKeyNameMap  = storeTable.getColumnKeyNameMap();
            this.accountKeyNameMap = storeAccount.getAccountKeyNameMap();
            this.OPCkeyPerms = storeEditPermissions.getAllOrgProjectColumnKeyPerms();
            let that=this;
            that.OPCNamePerms= that.OPCkeyPerms.map(p=>({
                perm_id:p.perm_id,
                
                project_key: p.project_key, 
                project_name: that.projectKeyNameMap[p.project_key]??"所有项目",
                
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