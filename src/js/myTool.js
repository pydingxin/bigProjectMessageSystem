function p(){ console.log.apply(this, arguments) }

import naiveApi from '@/js/naiveUiApi.js'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()
async function clipboardCopy(copyStr, successMsg) {
    // 复制字符串到剪贴板
    try {
        await toClipboard(copyStr)
        naiveApi.notification['success']({
          content: "成功",
          meta: successMsg,
          duration: 2500,
          keepAliveOnHover: true
        });
    } catch (e) {
      naiveApi.notification['error']({
        content: "错误",
        meta: '无法复制到剪贴板',
        duration: 1000,
        keepAliveOnHover: true
      });
    }
}

export default {
    p,
    clipboardCopy,
  }