import {reactive} from 'vue'    
function getThisOrgAccountMsg(){
    return {org_key:"2",org_name:"平邑县财政局",org_user:"pyxczj",org_pass:"123456"}
}
let msg=[
    {org_key:"2",org_name:"平邑县财政局",org_user:"pyxczj",org_pass:"123456"},
    {org_key:"1",org_name:"平邑县教育局",org_user:"pyxjyj",org_pass:"123456"}
]
function getAllOrgAccountMsg(){
    return msg;
}
function getOrgMsgByKey(key){
    return msg.filter(m=>m.org_key===key)[0];
}
function getAccountKeyNameMap(){
    let ret={};
    for(let m of msg){
        ret[m.org_key]=m.org_name;
    }
    return ret;
}
export const storeAccount = reactive({
    getThisOrgAccountMsg,
    getAllOrgAccountMsg,
    getOrgMsgByKey,

    getAccountKeyNameMap,
})
  