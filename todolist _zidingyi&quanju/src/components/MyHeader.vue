<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keydown.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },

  // props接受
  // props:['addTodo']
  
  methods: {
    add() {
      // 不能添加空格，去除字符串首尾空格
      if (!this.title.trim()) {
        alert("输入不能为空");
        return;
      }
      // 用户输入创建一个对象
      const todoObj = { id: nanoid(), title: this.title, done: false };
      // 该对象输送给App,清空输入框

      // 自定义事件接受父级@传输使用$emit,使用addTodo方法，传入参数todoObj
      this.$emit('addTodo',todoObj)

      // this.addTodo(todoObj);
      this.title = "";
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>