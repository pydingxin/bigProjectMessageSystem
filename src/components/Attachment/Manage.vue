<template>
  允许多文件上传<br/>

  <!-- name是后端用的r.GetUploadFiles("upload-file") -->
  <n-upload
    action="http://localhost:8199/upload/"
    :multiple="true"
    :with-credentials="true" 
    :default-file-list="uploadedFileList"
    name="upload-file"
    @finish="afterUpload"
    @remove="removeFile"
    @before-upload="beforeUpload"
  >
    <n-button>选择</n-button>
  </n-upload>
</template>

<script>
import { NButton,NUpload } from 'naive-ui'

export default{
  emits:['pointerenter', 'pointerleave'],
  components:{
    NButton,NUpload,
  },
  data() {
    return {
      uploadedFileList: [
        {
          id: "razars", //id是列表的key，可以用后台上传时间
          name: "刀",
          status: "finished" // 已上传才能显示删除按钮
        },
        {
          id: "edge",
          name: "刀",
          status: "finished"
        }
      ],
      attachments:[{
        path:'http://localhost/img.jpg',
        
      }],
    }
  },
  methods:{
    afterUpload(o){
      // 上传自动添加到列表里，但不会自动添加到uploadedFileList，本组件应该用v-if创建销毁。
      console.log("file uploaded",o.file,)

    },

    beforeUpload(data) {
      // 对每个文件都会执行一次该函数，进行各种检查，返回true允许上传，false取消上传
      console.log(data.file.file.name,data.file.file.size)
        return true;
    },
    removeFile(data) {
      // 删除成功返回true，文件列表也会改变，返回false文件列表不变
      console.log("remove file", data.file.name)
      return false;
    },
  }
}
</script>

<!-- ----------------------------- -->
