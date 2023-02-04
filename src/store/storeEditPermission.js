
import {reactive} from 'vue'    
import {storeAccount} from './storeAccount'
/*
权限涉及三个东西：单位名字-项目名-列名
单位名字 涉及Account store，后端获取的，可以为 所有单位
项目名 涉及Table store，后端获取的，可以为所有项目
列名不涉及后端，写死在storeGlobalTable里 可以为所有列
权限为[{orgName:'',projectName:'',columnName:''}]，从后端存取
编辑单元格时，检查权限即可。
*/
let perm=[
  {
    orgName:"平邑县教体局",
    projectName:"所有行",
    columnName:"项目建成后效益",
  },
];
function getAllOrgEditPermissions(){
    return perm;
}
function getThisOrgEditPermissions(){
  return perm.filter(one=>(
    one.orgName==='所有单位' || one.orgName===storeAccount.getThisUserOrgName()
    ))
}

export const storeAttachments = reactive({
  getAllOrgEditPermissions,
  getThisOrgEditPermissions,
})
