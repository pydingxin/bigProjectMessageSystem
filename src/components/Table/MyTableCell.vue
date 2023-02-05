<script>
import {storeTable} from '@/store/storeGlobalTable.js'
import { toRaw } from 'vue' //toRaw只能转基础类型
import naiveApi from '@/js/naiveUiApi.js'
import eventBus from '@/js/mittEventBus.js'
import myTool from '@/js/myTool.js'

import {NScrollbar, } from 'naive-ui'

export default {
    props:['rowKey','colKey'],  //父组件只给位置，自己从store里取数据。数据会变，位置不变
    components:{
        NScrollbar
    },

    computed: {
        cellid() {
            return this.curRowKey+ '-'+ this.curColKey;
        }
    },

    mounted(){
        // 从proxy props里获取位置数据
        this.curColKey= toRaw(this.colKey)
        this.curRowKey= toRaw(this.rowKey)

        let that=this;
        
        // 设置父元素背景色和双击事件，mounted时候节点还没渲染出来，需要等待
        // 在这里绑定事件，能防止多次绑定
        let handler=setInterval(()=>{
            if(!document.querySelector("#"+this.cellid)) return;
            clearInterval(handler);
            // myTool.p("in MyTableCell mounted()",document.querySelector("#"+this.cellid))
            let papa=document.querySelector("#"+this.cellid).parentNode;
            papa.addEventListener("dblclick",()=>{that.editThisCell();});
            papa.setAttribute("style", "background-color:"+this.curCellConfig.color);
        },200)
    },

    updated(){
        // 用位置从全局数据里获取单元格内容和配置
        this.curCellConfig= storeTable.G_getCellConfig(this.curRowKey,this.curColKey);
        this.curCellValue=  storeTable.G_getCellValue(this.curRowKey,this.curColKey);
    },

    data() {
        return {
            //因为经过了renderCell，props都变成了proxy，必须取得原值，并且不能改变这些值。
            curColKey:'',
            curRowKey:'',

            curCellConfig:'', //单元格的配置，如{color:"green",overlapping:5} 
            curCellValue:'',
        }
    },
    methods:{
        editThisCell(){
            // ctrl+click单元格发出事件 通知MyTable.vue要编辑本单元格
            // 父组件根据此单元格的情况，打开编辑窗口或其他操作
            let that = this;
            myTool.p("in MyTableCell.vue editThisCell(), emit event editCell, ",that.curRowKey,that.curColKey)
            storeTable.setCurrentEditingCellKey({"rowkey":that.curRowKey,"colkey":that.curColKey})
            eventBus.emit("editCell");
        }
    },
}
</script>

<template>

    <!-- 用id设置父元素背景色，MyTable.vue里class配合deep修改富文本格式 -->
    <div :id="cellid" style="max-height: 15rem;overflow-y: auto;" v-html="curCellValue" ></div>

 </template>

<style scoped>
::-webkit-scrollbar {
    width: 8px;
}
/*  滚动条轨道 */
::-webkit-scrollbar-track {
    background-color:lightblue;
    border-radius: 6px;
}
/*  滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
    background-color:rosybrown;
    border-radius: 6px;
}
</style>