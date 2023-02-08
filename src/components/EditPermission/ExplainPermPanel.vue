<template>
    <article class="card">
        <header>
            <h4>说明</h4>
        </header>
        <footer> 
            <p>管理员制定表格编辑权限</p>
            <p>一条权限由三部分组成：单位—行—列</p>
            <p>横向一行即一个项目，纵向一列即一个栏目</p>
        </footer> 
    </article>

    <article class="card">
        <header>
            <h4>例子</h4>
        </header>
        <footer> 
            <p>【所有单位——所有行——所有列】：所有单位 能编辑 所有行 的 所有列</p>
            <p>【发改局——所有行——项目名称】：发改局 能编辑 所有项目行 的 项目名称</p>
            <p>【交通局——危桥项目——所有列】：交通局 能编辑 危桥项目 的 所有列</p>
            <p>【地方镇——污水厂——建设性质】：地方镇 能编辑 污水厂项目 的 建设性质</p>
        </footer> 
    </article>
  </template>
  
<script>
export default {
    data(){
        return {
            
        }
    },
}
</script>