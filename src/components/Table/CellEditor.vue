
<template>
    

        <div id="div1_cellplace">
            <!-- 当前单元格位置 -->
            当前行：{{ cellProjectName}} 
            <br/>
            当前列：{{ cellColumnName}} 
        </div>
       
        <div id="div2_cellFormat">
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

        <div id="div3_editorBox">
            <CellEditorWang />
        </div>
    </template>
    
    
<script>
import { 
    NModal,NSwitch,NButton,NDivider,NSpace,NInputNumber,
    NSelect
} from 'naive-ui'
import { storeTable } from '@/store/storeGlobalTable';
import { storeAttachments } from '@/store/storeAttachments.js';

import naiveApi from '@/js/naiveUiApi.js'
import  CellEditorWang  from './CellEditorWang.vue'


export default {
    emits:['pointerenter', 'pointerleave'],
    components: {
        NButton,CellEditorWang,NDivider,
        NInputNumber,NSwitch,NSpace,NSelect,
        NModal
    },
    data(){
        return {
            overlapping_on:false,  //是否覆盖后续列
            overlapping:1,

            showAttachmentsUrlList:false, //是否显示附件地址模态框

            cellColor_on:false,
            cellColor:"red",
            cellColorOptions: [
                {label: "红色",value: "red",},
                {label: "绿色",value: "green"},
                {label: "黄色",value: "yellow"},
            ],


            cellProjectName:storeTable.get_CurrentEditingCell_projectName(),
            cellColumnName:storeTable.get_CurrentEditingCell_ColumnName(),
        }
    },
    methods:{

    },

}

</script>


<style>


</style>
