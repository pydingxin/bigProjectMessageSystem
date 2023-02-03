<template>
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
    @error="handleUploadError"
    show-download-button
    @download="handleDownload"
  >
    <n-upload-dragger>
      <n-gradient-text :size="15" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
        <p>点击此处，或拖动多个文件到此处，无需确认即可上传</p>
        <p>【上传重名文件会覆盖旧文件】</p>
        <p>【文件大小不超过XXM】</p>
        <p>【点击下方文件列表右侧删除按钮，可删除文件】</p>
        怎么拷贝文件url？
      </n-gradient-text>
    </n-upload-dragger>

  </n-upload>
</template>

<script>
import { NButton,NUpload,NUploadDragger,NGradientText } from 'naive-ui'
import naiveApi from '@/js/naiveUiApi.js'

export default{
  emits:['pointerenter', 'pointerleave'],
  components:{
    NButton,NUpload,NUploadDragger,NGradientText
  },
  data() {
    return {
      uploadedFileList: [
        {
          id: "razars", //id是列表的key，可以用后台上传时间
          name: "刀",
          status: "finished", // 已上传才能显示删除按钮
        },
        {
          id: "edge",
          name: "刀",
          status: "finished"
        }
      ],

    }
  },
  methods:{
    afterUpload(o){
      // 上传自动添加到列表里，但不会自动添加到uploadedFileList，本组件应该用v-if创建销毁。
      console.log("file uploaded",o.file,)

    },
    handleUploadError(o){
      //上传失败
      console.log("error",o.file.name)

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

    handleDownload(file){
      //不添加url，点击下载也不会下载
      //用这个下载按钮，实现复制url的功能，但管理素材，最好和选择素材分开，混一块很纠缠

      return false;
    }
  }
}
</script>

<!-- ----------------------------- -->
