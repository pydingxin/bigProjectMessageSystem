
import {reactive} from 'vue'    

/*
后台数据库保存文件名即可，url status id 都可以临时生成
*/
let attches = [
    {
        id: 'url-test',
        name: 'a.txt',
        url: 'https://a.txt',
        status: 'finished'
      },
      {
        id: 'text-message',
        name: '你的短信.doc',
        url: 'https://你的短信.doc',
        status: 'error'
      },
      {
        id: 'notification',
        name: '你的通知.xls',
        url: 'https://你的通知.xls',
        status: 'finished'
      },
      {
        id: 'contact',
        name: '你的联系人信息.pptx',
        url: 'https://你的联系人信息.pptx',
        status: 'finished'
      }
]
function getAllAttachments(){
    return attches;
}
export const storeAttachments = reactive({
  getAllAttachments,
})
