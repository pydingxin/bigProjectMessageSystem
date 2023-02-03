<template>
  <!-- 表格 -->
  <n-scrollbar trigger="none" x-scrollable>
    <div v-if="renderTable" id="table_container" style="min-width:3000px" >
      <n-data-table
        size="large"
        :render-cell="renderCell"
        :data="tableData"
        :columns="columns"
        :single-line="false"
        :pagination="pagination"
      />
    </div>
  </n-scrollbar>

  <!-- 编辑器模态窗口 -->
  <n-modal
    v-model:show="showCellEditorModal"
    preset="dialog"
    title="正在编辑单元格"
    positive-text="保存"
    negative-text="取消"
    :mask-closable="false"
    @positive-click="editCellSubmit"
    @negative-click="editCellCancel"
  >
    <CellEditor />
  </n-modal>

</template>

<script>
import {storeTable} from '@/store/storeGlobalTable.js'
import eventBus from '@/js/mittEventBus.js'
import naiveApi from '@/js/naiveUiApi.js'
import myTool from '@/js/myTool.js'
import { NText,NModal, NTag,NScrollbar, NButton,NDataTable } from 'naive-ui'
import { h } from 'vue'
import MyTableCell from './MyTableCell.vue'
import CellEditor from './CellEditor.vue'

export default {
  emits:['pointerenter', 'pointerleave'],
  components: {
    NText,
    NModal,
    NTag,
    NScrollbar,
    NButton,
    NDataTable,
    MyTableCell,
    CellEditor
},

  data() {
    return {
      renderTable:true,
      test:"",

      showCellEditorModal:false, //是否显示编辑器的模态窗口，点击取消和关闭后自动重置为false

      //表格参数，先绑到局部变量,便于解耦和管理
      tableData:storeTable.tableData, 
      columns:  storeTable.tableColumns,
      pagination: {
        pageSize: 10
      }

    }
  },

    mounted(){
      //注册事件
      let that=this;
      eventBus.on('editCell',()=>{
          myTool.p("in MyTable.vue editCell event handler", storeTable.getCurrentEditingCellKey())
          that.showCellEditorModal=true;
      })
    },

  methods:{
    reloadTable() {
      //storeTable改变时，表格不刷新，需要手动销毁重构。
      this.renderTable = false
      this.$nextTick(() => (this.renderTable = true))
    },   

    renderCell(value, rowData, column){
        // column 这列的column配置 如{title: '责任领导', key: 'col29'}
        // value 当前单元格的列数据
        // rowData 本行所有单元格的数据
          return h(MyTableCell, {
            colKey:column.key,
            rowKey:rowData.key,
          });
      },

      editCellCancel(){
        // naiveApi.message.success("cell cancelled")
      },
      editCellSubmit(){
        // naiveApi.message.success("cell saved successfully")
        // myTool.p('in MyTable.vue editCellSubmit(), after editing got :',storeTable.get_CurrentEditingCell_tmp_content())
      },
  }
}
</script>


<style scoped>
:deep(.n-data-table-th){
  text-align: center;
  background-color:antiquewhite;
  border:1px solid black;
  font-weight: bold;
}


#table_container{
  margin: 1rem;
}

/* 放在MyTableCell里就不生效，放这里就生效，
  deep应该是用于子元素，不用于当前元素 */
:deep(.celldiv > *){
    margin:0;
}
</style>
