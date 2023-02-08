<!-- <template>
    <article class="card">
        <header>
            <h4>方法一：手动输入</h4>
        </header>
        <footer> 
            <p>请确保输入准确的全名</p>
            <fieldset class="flex three">
                <label><input placeholder="用户名"></label>
                <label><input placeholder="项目名"></label>
                <label><input placeholder="列名"></label>
            </fieldset>
            <button>保存</button>
        </footer>
    </article>

    
    <article class="card">
        <header>
            <h4>方法二：选项输入</h4>
        </header>
        <footer> 
            <select >
                <option value="*">所有单位</option>
                <option value="a">Good option</option>
                <option value="b">Nice option</option>
                <option value="c">Cheap option</option>
            </select>
            <select >
                <option value="*">所有行</option>
                <option value="a">Good option</option>
                <option value="b">Nice option</option>
                <option value="c">Cheap option</option>
            </select>
            <select >
                <option value="*">所有列</option>
                <option value="a">Good option</option>
                <option value="b">Nice option</option>
                <option value="c">Cheap option</option>
            </select>
            <button>保存</button>
        </footer>
    </article>
</template> -->

<template>
<n-select
    v-model:value="selectedValues"
    multiple
    filterable
    placeholder="搜索歌曲"
    :options="options"
    :loading="loading"
    clearable
    remote
    :clear-filter-after-select="false"
    @search="handleSearch"
  />
</template>
<script>
import { NPopconfirm,NButton } from 'naive-ui';
import { NSelect } from 'naive-ui';

export default {
    components:{
       NPopconfirm,NButton,NSelect
   },
    props:['perm'],
    data(){
        return {
            show:false,
        }
    },
    methods:{
        deletePerm(){
            console.log("delete perm",this.perm)
        },
    },
    mounted(){
    },
}
</script>