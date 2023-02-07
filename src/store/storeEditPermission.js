
import {reactive} from 'vue'    

/*
权限涉及三个东西：单位名字-项目名-列名
单位名字 涉及Account store，后端获取的，可以为 所有单位
项目名 涉及Table store，后端获取的，可以为所有项目
列名不涉及后端，写死在storeGlobalTable里 可以为所有列
编辑单元格时，检查权限即可。
*/
let keyPerms = [
  {
    'perm_id':"1", //根据id修改删除规则
    'org_key':'*', 
    'project_key':'*', 
    'column_key':'*',
  },
  {
    'perm_id':"2",
    'org_key':'1', 
    'project_key':'row0', 
    'column_key':'col1',
  }
];

function getAllOrgEditPermissions(){
    return perm;
}
function getThisOrgEditPermissions(){
  return perm.filter(one=>(
    one.orgName==='所有单位' || one.orgName===storeAccount.getThisUserOrgName()
    ))
}
function getAllOrgProjectColumnKeyPerms(){
  return keyPerms;
}
export const storeEditPermissions = reactive({
  // getAllOrgEditPermissions,
  // getThisOrgEditPermissions,
  getAllOrgProjectColumnKeyPerms,
})
