<template>
  <div>
    <li>
        <label>
            <!-- 以下代码也可实现，但不建议，props中vue浅层监视，而props中修改数据违法 -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->

            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id,todo.title)">删除</button>
    </li>

  </div>
</template>

<script>
export default {
  name:'MyItem',
  // data(){
  //   return {
      
  //   }
  // },
  props:['todo','checkTodo','deleteTodo'],
  mounted(){
    console.log(this.todo)
  },
  methods:{
    handleCheck(id){
      // 将App中的todo的done取反
      this.checkTodo(id)
    },

    handleDelete(id)  {
      if(confirm("确定删除？")){
        this.deleteTodo(id)
      }
    }
  }
}

</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #eee;
    }

    li:hover button{
        display: block;
    }
</style>