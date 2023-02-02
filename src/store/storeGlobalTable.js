import {reactive} from 'vue'    // reactive()使其变为响应式
let mock1=[{
    "key":"row0",
    "col0":"3",
    "col1":"洪宽生态板、高档家具制造项目",
    "col2":"占地188亩，总建筑面积103473平方米，主要建设7栋生产车间、办公区等，新上10条板材生产线，10条家具生产线，购置设备20套。",
    "col3":"完成建筑面积45816平方米；新上生产线10条；生产车间5栋；办公用房6600平方米；设备10套。",
    "col4":"54000",
    "col5":"20000",
    "col6":"产值25000万元；税收800万元；亩均投资280万元；亩均税收10万元；新增就业200人。",
    "col7":`<ul><li>3月土地、土地平整，完成投资4000万元；</li><li>4月开工建设，完成投资1000万元；</li></ul><p style="text-indent: 2em;">5月基础建设，完成投资3000万元；</p><p><span style="color: rgb(114, 192, 64);"><strong>6月钢构安装，完成投资2000万元；</strong></span></p><ol><li>7月钢构安装，完成投资2000万元；</li><li>8月设备安装，完成投资3000万元；</li></ol><h3><span style="background-color: rgb(255, 251, 143);"><u><em><strong>9月设备安装，完成投资3000万元；</strong></em></u></span></h3><p>10月投产，完成投资2000万元。"</p><p><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp;</span></p>`,
    "col8":"是",
    "col9":"25800",
    "col10":"129%",
    "col11":"项目已全面开工建设，1号、2号车间开始外墙瓦安装，3号、4号、5号钢构主体已完成，办公楼已封顶，宿舍楼主体完成。",
    "col12":"土地出让金2500万元；清表费用1000万元；土建工程3500万元；1号车间钢结构4500万元;设备基础3500万元;设备安装3000万元。",
    "col13":"已纳统，MA3MAC819371326001",
    "col14":"√",
    "col15":"√",
    "col16":"√",
    "col17":"√",
    "col18":"√",
    "col19":"√",
    "col20":"√",
    "col21":"",
    "col22":"",
    "col23":"√",
    "col24":"前期因供地错位，需要增补的20亩用地手续尚未办结。",
    "col25":"21.24亩集体土地联营县政府已批复。剩余面积将项目纳入2022年成片开发方案，待方案批复后实施土地征收。",
    "col26":"自然资源和规划局",
    "col27":"待定",
    "col28":"卞桥镇",
    "col29":"程学文"
},{
    "key":"row1",
    "col0":"3",
    "col1":"第二个 项目",
    "col2":"占地188亩，总建筑面积103473平方米，主要建设7栋生产车间、办公区等，新上10条板材生产线，10条家具生产线，购置设备20套。",
    "col3":"完成建筑面积45816平方米；新上生产线10条；生产车间5栋；办公用房6600平方米；设备10套。",
    "col4":"54000",
    "col5":"20000",
    "col6":"产值25000万元；税收800万元；亩均投资280万元；亩均税收10万元；新增就业200人。",
    "col7":"3月土地、土地平整，完成投资4000万元；4月开工建设，完成投资1000万元；5月基础建设，完成投资3000万元；6月钢构安装，完成投资2000万元；7月钢构安装，完成投资2000万元；8月设备安装，完成投资3000万元；9月设备安装，完成投资3000万元；10月投产，完成投资2000万元。",
    "col8":"是",
    "col9":"25800",
    "col10":"129%",
    "col11":"项目已全面开工建设，1号、2号车间开始外墙瓦安装，3号、4号、5号钢构主体已完成，办公楼已封顶，宿舍楼主体完成。",
    "col12":"土地出让金2500万元；清表费用1000万元；土建工程3500万元；1号车间钢结构4500万元;设备基础3500万元;设备安装3000万元。",
    "col13":"已纳统，MA3MAC819371326001",
    "col14":"√",
    "col15":"√",
    "col16":"√",
    "col17":"√",
    "col18":"√",
    "col19":"√",
    "col20":"√",
    "col21":"",
    "col22":"",
    "col23":"√",
    "col24":"前期因供地错位，需要增补的20亩用地手续尚未办结。",
    "col25":"21.24亩集体土地联营县政府已批复。剩余面积将项目纳入2022年成片开发方案，待方案批复后实施土地征收。",
    "col26":"自然资源和规划局",
    "col27":"待定",
    "col28":"卞桥镇",
    "col29":"程学文"
},
{
    "key":"row2",
    "col0":"3",
    "col1":"项目三",
    "col2":"占地188亩，总建筑面积103473平方米，主要建设7栋生产车间、办公区等，新上10条板材生产线，10条家具生产线，购置设备20套。",
    "col3":"完成建筑面积45816平方米；新上生产线10条；生产车间5栋；办公用房6600平方米；设备10套。",
    "col4":"54000",
    "col5":"20000",
    "col6":"产值25000万元；税收800万元；亩均投资280万元；亩均税收10万元；新增就业200人。",
    "col7":"3月土地、土地平整，完成投资4000万元；4月开工建设，完成投资1000万元；5月基础建设，完成投资3000万元；6月钢构安装，完成投资2000万元；7月钢构安装，完成投资2000万元；8月设备安装，完成投资3000万元；9月设备安装，完成投资3000万元；10月投产，完成投资2000万元。",
    "col8":"是",
    "col9":"25800",
    "col10":"129%",
    "col11":"项目已全面开工建设，1号、2号车间开始外墙瓦安装，3号、4号、5号钢构主体已完成，办公楼已封顶，宿舍楼主体完成。",
    "col12":"土地出让金2500万元；清表费用1000万元；土建工程3500万元；1号车间钢结构4500万元;设备基础3500万元;设备安装3000万元。",
    "col13":"已纳统，MA3MAC819371326001",
    "col14":"√",
    "col15":"√",
    "col16":"√",
    "col17":"√",
    "col18":"√",
    "col19":"√",
    "col20":"√",
    "col21":"",
    "col22":"",
    "col23":"√",
    "col24":"前期因供地错位，需要增补的20亩用地手续尚未办结。",
    "col25":"21.24亩集体土地联营县政府已批复。剩余面积将项目纳入2022年成片开发方案，待方案批复后实施土地征收。",
    "col26":"自然资源和规划局",
    "col27":"待定",
    "col28":"卞桥镇",
    "col29":"程学文"
}];

let column2022 = [
    {"title":"序号","key":"col0"},
    {"title":"项目名称","key":"col1"},
    {"title":"总建设规模和建设内容","key":"col2"},
    {"title":"2022年计划建设内容","key":"col3"},
    {"title":"总投资（万元）","key":"col4"},
    {"title":"2022年计划投资（万元）","key":"col5"},
    {"title":"项目建成后效益","key":"col6"},
    {"title":"2022年节点目标（万元）","key":"col7"},

    {"title": "形象进度","key":"colk0",
        "children":[
            {"title":"是否开工","key":"col8"},
            {"title":"本年度累计完成投资额度（不含2021年）","key":"col9"},
            {"title":"投资完成率","key":"col10"},
            {"title":"实物工程量","key":"col11"},
            {"title":"本年度完成投资明细（万元）","key":"col12"},
            {"title":"是否纳统","key":"col13"}]
    },

    {"title":"手续办理情况","key":"colk1",
        "children":[
            {"title":"立项","key":"col14"},
            {"title":"环评","key":"col15"},
            {"title":"土地批文","key":"col16"},
            {"title":"土地出让合同或划拨决定书或土地证号","key":"col17"},
            {"title":"用地规划许可证","key":"col18"},
            {"title":"规划设计方案审查批文","key":"col19"},
            {"title":"工程规划许可证","key":"col20"},
            {"title":"水土保持方案批复","key":"col21"},
            {"title":"节能","key":"col22"},
            {"title":"施工许可证（含消防设计审查）","key":"col23"}]
    },

    {"title":"存在问题、解决方案及完成时限","key":"colk2",
        "children":[
            {"title":"具体问题","key":"col24"},
            {"title":"解决措施","key":"col25"},
            {"title":"办理部门","key":"col26"},
            {"title":"完成时限","key":"col27"}]
    },

    {"title":"责任单位","key":"col28"},
    {"title":"责任领导","key":"col29"}
];

function extractKey2CellConfig(){
    //把行列的key拿出来做成key-key-config对象
    //数据必然是数组，数组中每个元素x有key，x的以col开头域都是列key
    //运行时应该从后台获取这个对象
    let ret = {}
    for(let row of mock1){
        ret[row.key]= {}
        for(let col of Object.keys(row).filter(x=>x.startsWith("col"))){
            ret[row.key][col]={};
        }
    }
    return ret
}

function add_ColSpanFunc_2_columnsObject(columnArr, cellConfig){
/*
    现在有3个对象（应该从后台获取）
    column对象是表头定义，array格式，每个是一列
    data对象是数据，array格式，每个是一行
    config对象是单元格格式配置，map格式：
    rowkey-colkey-cellconfig，目前2个条目{color:"green",overlapping:4}

    column每列要有一个colSpan函数，设置在不同行上的合并
    但colSpan函数没有列参数，必须逐列硬编码写进column对象里，这是最大的问题。

    用add_ColSpanFunc_2_columnsObject递归column把函数添加进去
    然后这个表头才是可用的。
*/
    
    function colSpanFuncOf(colkey,cellConfig){
        // 用列key自动化制作niaveUI datatable的column每一列上用的colSpan函数
        // config必须都初始化了，至少是空对象
        return function(rowData){
            const cnt=cellConfig[rowData.key][colkey].overlapping;
            /*  表格用的并不是overlapping 而是colSpan，差值为1
                overlapping=0 → colSpan=1
                overlapping=1 → colSpan=2
            */
            return (cnt?parseInt(cnt,10):0)+1;
        }
    }

    // 递归columns对象，给真正的列添加colSpan函数
    // 叶节点才是真正的列，有children不用添加
    function deepAddFunc2Node(colNode){
        if(colNode.hasOwnProperty('children')){
            for(let idx=0;idx<colNode.children.length;idx++){
                deepAddFunc2Node(colNode.children[idx]);
            }
        }else{
            // console.log('该列添加colSpan函数',colNode.key)
            colNode.colSpan= colSpanFuncOf(colNode.key, cellConfig) 
        }
    }
    //column本身是数组，里面元素才是colNode
    for(let idx=0;idx<columnArr.length;idx++){
        deepAddFunc2Node(columnArr[idx])
    }
}

function walkColumn(columnMsg,processNodeFunc){
    //遍历目录，逐个节点执行do函数
    function walkColNode(colNode){
        if(colNode.hasOwnProperty('children')){
            for(let idx=0;idx<colNode.children.length;idx++){
                walkColNode(colNode.children[idx]);
            }
        }else{
            // console.log('该列添加colSpan函数',colNode.key)
            processNodeFunc(colNode)
        }
    }
    //column本身是数组，里面元素才是colNode
    for(let idx=0;idx<columnMsg.length;idx++){
        walkColNode(columnMsg[idx])
    }
}
function getColumnNameByColKey(columnMsg, key){
    let colname='';
    walkColumn(columnMsg,(node)=>{if(key===node.key)colname=node.title})
    return colname;
}

// 制作一个临时config对象测试用
let tableCellConfig = extractKey2CellConfig();
tableCellConfig['row0']['col0']= {color:"#3CB371",overlapping:1} 
tableCellConfig['row1']['col2']= {color:"#D24D57",overlapping:2}

tableCellConfig['row2']['col1']= {color:"#FFFF00",overlapping:0} 
//复合表头也算一列，要用户自己调试

add_ColSpanFunc_2_columnsObject(column2022, tableCellConfig);

function makeTableDataRowMapped(tbdata){
    /*  
        tableData是数组格式用起来不方便，转为map格式的tableDataRowMapped
        可以用rowkey-colkey-cellvalue的方式获取数据
        tableDataRowMapped的元素指向tableData，底层是同一份数据
    */
    let tableDataRowMapped={};
    for(let idx=0; idx<tbdata.length; ++idx){
        tableDataRowMapped[tbdata[idx].key] = tbdata[idx];
    }
    return tableDataRowMapped;
}

let tableDataRowMapped= makeTableDataRowMapped(mock1);
function  G_getCellValue(rowkey,colkey){
    // console.log("in G_getCellValue",rowkey,colkey)
    return tableDataRowMapped[rowkey][colkey];
}

function  G_setCellValue(rowkey,colkey,val){
    // console.log("in G_setCellValue",rowkey,colkey,val)
    tableDataRowMapped[rowkey][colkey]=val;
}

function G_getCellConfig(rowkey,colkey){
    // console.log("in G_getCellConfig",rowkey,colkey)
    return tableCellConfig[rowkey][colkey];
}


/*-----------------------------------------------------------
    被编辑的单元格位置
    ctrl+click单元格 启动编辑 设置编辑位置 发出编辑事件
    其他组件从这里获取位置
*/
let current_editing_rowkey ='';
let current_editing_colkey ='';
function setCurrentEditingCellKey(place) {
    current_editing_rowkey= place.rowkey;
    current_editing_colkey= place.colkey;
}
function getCurrentEditingCellKey() { 
    return {
        rowkey: current_editing_rowkey,
        colkey: current_editing_colkey,
    }
}
function get_CurrentEditingCell_projectName(){
    //如果当前编辑的单元格位置已被设置，返回单元格的项目名
    console.log("in get_CurrentEditingCell_projectName ",current_editing_rowkey)
    return tableDataRowMapped[current_editing_rowkey]['col1']
}
function get_CurrentEditingCell_ColumnName(){
    //如果当前编辑的单元格位置已被设置，返回单元格的列名
    console.log("in get_CurrentEditingCell_ColumnName ",current_editing_colkey)
    return getColumnNameByColKey(column2022,current_editing_colkey)
}
function get_CurrentEditingCell_content(){
    //单元格富文本内容
    return tableDataRowMapped[current_editing_rowkey][current_editing_colkey]
}
//----------------------------------------------------------------

export const storeTable = reactive({
    tableData:mock1,
    tableColumns:column2022,
    tableTitle:"2022年县级重点项目建设情况调度表",
    G_getCellValue,
    G_getCellConfig,
    G_setCellValue,

    setCurrentEditingCellKey,
    getCurrentEditingCellKey,

    get_CurrentEditingCell_projectName,
    get_CurrentEditingCell_ColumnName,
    get_CurrentEditingCell_content,
})
