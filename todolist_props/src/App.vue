<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
              <!-- <MyHeader></MyHeader>
              <MyList></MyList>
              <MyFooter></MyFooter> -->
            <MyHeader :addTodo="addTodo"/>
            <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
            <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data(){
    return {
      todos:
      // [
      //   {id:'001',title:'抽烟',done:true},
      //   {id:'002',title:'喝酒',done:false},
      //   {id:'003',title:'开车',done:true},
      // ]
      // 如果初试没有结果返回空数组，仍然具有length属性
      JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
   //添加一个todo
   addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            //全选or取消勾选
            checkAllTodo(done){
                this.todos.forEach(todo => todo.done = done)
            },
            //删除已完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter(todo => !todo.done)
            }
  },  
  watch:{
    todos:{
      // 深监视，handler
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
      // 浅监视，无法监视对象里边的属性
      // localStorage.setItem('todos',JSON.stringify(value))
    },

  },

}
</script>

<style>
/* base */
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
      outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
