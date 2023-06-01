<template>
  <div>
    <li>
      <label>
        <!-- 以下代码也可实现，但不建议，props中vue浅层监视，而props中修改数据违法 -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->

        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
          ref="inputTitle"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input v-show="todo.isEdit" type="text" :value=" todo.title " @blur="handleBlur(todo,$event)">
      </label>

      <button class="btn btn-danger" @click="handleDelete(todo.id, todo.title)">
        删除
      </button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">
        编辑
      </button>
    </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  // data(){
  //   return {

  //   }
  // },

  props: ["todo"],
  mounted() {
    console.log(this.todo);
  },
  methods: {
    // 勾选是否取消
    handleCheck(id) {
      // 将App中的todo的done取反
      // this.checkTodo(id)

      // 全局事件触发
      this.$bus.$emit("checkTodo", id);
    },

    // 删除
    handleDelete(id) {
      if (confirm("确定删除？")) {
        // 父级传入
        // this.deleteTodo(id)

        // 全局事件
        // this.$bus.$emit('deleteTodo',id)

        // 消息发布
        pubsub.publish("deleteTodo", id);
      }
    },

    // 编辑
    handleEdit(todo){
      // todo.isEdit = true

      if( todo.hasOwnProperty.call('isEdit') ){
        todo.isEdit = true
      }else{
      this.$set(todo,'isEdit',true)        
      }
      // this.$refs.inputTitle.focus()
      // 一个回调全部解析完后再解析模板

      // nextTick 在DOM结点解析完后执行
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    // 失焦回调
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  },
};
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

li:hover button {
  display: block;
}
</style>