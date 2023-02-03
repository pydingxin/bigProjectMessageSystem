<script>
import { 
    NSwitch,NButton,NDivider,NSpace,NInputNumber,
    NSelect
} from 'naive-ui'
import { storeTable } from '@/store/storeGlobalTable';
import { storeAttachments } from '@/store/storeAttachments.js';


import  CellEditorWang  from './CellEditorWang.vue'

export default {
    emits:['pointerenter', 'pointerleave'],
    components: {
        NButton,CellEditorWang,NDivider,
        NInputNumber,NSwitch,NSpace,NSelect,
    },
    data(){
        return {
            overlapping_on:false,  //是否覆盖后续列
            overlapping:1,

            cellColor_on:false,
            cellColor:"red",
            cellColorOptions: [
                {label: "红色",value: "red",},
                {label: "绿色",value: "green"},
                {label: "黄色",value: "yellow"},
            ],

            //用选择器获取附件的网址，然后用户手动把网址粘贴到编辑器里
            selectedAttachmentUrl:'',
            attachments:storeAttachments.getAllAttachments(),
            attachmentsOptions:attachments.map(one=>({label:one.name,value:one.url})),

            cellProjectName:storeTable.get_CurrentEditingCell_projectName(),
            cellColumnName:storeTable.get_CurrentEditingCell_ColumnName(),
        }
    }
}

</script>


<template>
<div style="padding:1rem;max-width: 50rem;">
    <div>
        {{ cellProjectName}} 
        <br/>
        {{ cellColumnName}} 
    </div>
    <n-divider />
    <div id="formatBox">
        <span>一、显示效果：</span>
        <n-space align="center">
            <p>合并右侧单元格：</p>
            <n-switch 
                v-model:value="overlapping_on">
                <template #checked>开启</template>
                <template #unchecked>关闭</template>
            </n-switch>
            <n-input-number
                :disabled="!overlapping_on" 
                v-show="overlapping_on" 
                v-model:value="overlapping"
                style="width:5rem"
                placeholder=""
                :min="1"
            />
        </n-space>

        <n-space  align="center">
            <p>本单元格背景色：</p>
            <n-switch 
                v-model:value="cellColor_on">
                <template #checked>开启</template>
                <template #unchecked>关闭</template>
            </n-switch>

            <n-select 
                v-show="cellColor_on" 
                v-model:value="cellColor" 
                style="width:5rem"
                :options="cellColorOptions" />
            
        </n-space>
    </div>
    <n-divider />
    <div id="editorBox">
        二、内容编辑：
        <CellEditorWang />
    </div>
</div>
</template>

<style>


</style>
