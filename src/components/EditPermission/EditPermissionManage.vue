<template>
    <div class="tabs three">
        <input id='tab-1' type='radio' name='tabgroupB' checked />
        <label class="pseudo button toggle" for="tab-1">规则展示</label>
  
        <input id='tab-2' type='radio' name='tabgroupB'>
        <label class="pseudo button toggle" for="tab-2">规则添加</label>
  
        <input id='tab-3' type='radio' name='tabgroupB'>
        <label class="pseudo button toggle" for="tab-3">规则说明</label>
    
        <div class="row">
            <div><ShowPermPanel /></div>
            <div><AddPermPanel /></div>
            <div><ExplainPermPanel /></div>
        </div>
    </div>
</template>

<script>
import ShowPermPanel from './ShowPermPanel.vue'
import AddPermPanel from './AddPermPanel.vue'
import ExplainPermPanel from './ExplainPermPanel.vue'
export default{
    components: {ShowPermPanel,AddPermPanel,ExplainPermPanel},
}
</script>
