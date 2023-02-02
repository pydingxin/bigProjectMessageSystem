<template>

        <div style="border: 1px solid #ccc">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 300px; overflow-y: hidden;"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
        />
        </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {storeTable} from '@/store/storeGlobalTable.js'


export default ({
  emits:['pointerenter', 'pointerleave'],
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()
    // 内容 HTML
    let currentValue= storeTable.get_CurrentEditingCell_content();
    const valueHtml = ref(currentValue)
    const toolbarConfig = {
        //排除菜单栏里没用的功能
        excludeKeys :[
            'headerSelect','blockquote','group-more-style','fontSize','fontFamily',
            'group-image','insertTable','group-video',
            'lineHeight','todo','codeBlock','divider','undo','redo','fullScreen'],
    }
    const editorConfig = { 
        placeholder: '请输入内容...' ,
    }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated
    };
  }
})
</script>    

<style >

</style>