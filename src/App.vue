<template>
  <div id="app">
    <todo-list>
      <todo-item @delete="handleDelete" v-for ="item in list" :key="item.title" :title="item.title" :del="item.del">
        <template v-slot:pre-icon ="{value}">
          <span>前置图标{{value}}</span>
          <select>111 </select>

        </template>

      </todo-item>
    </todo-list>
  </div>
  
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
import select from './components/select.vue'


export default {
  name: 'App',
  components: {
    TodoList,TodoItem,select
  },
  data(){
    return{
      message:'Hello,World',
      list:[{title:"课程1",
            del:false},
            {title:"课程2",
            del:true}],
    }
  },
  methods:{
    handleDelete(val){
      console.log('handleDelete',val)
    }
  
  }

}
</script>

