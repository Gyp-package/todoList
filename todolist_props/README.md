# todolist

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### 生成唯一的 id，应用于 methods 添加 item

```
npm i nonaid
```
引用    id:nanoid()

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

组件拆分成
Header 添加框
List 选择框
Item 子选择框
Footer 全选/已选框

1.组件化编码流程:
(1).拆分静态组件:组件要按照功能点拆分，命名不要与html元素冲突。(2).实现动态组件:考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
1).一个组件在用:放在组件自身即可。
2).一些组件在用:放在他们共同的父组件上(状态提升)。(3).实现交互:从绑定事件开始。

2.props适用于:
(1).父组件==>子组件通信
(2).子组件==>父组件通信（要求父先给子一个函数）

3.使用v-model时要切记: v-model绑定的值不能是props传过来的值，因为props是不可以修改的!

4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

5. 本地存储，watch监视数据，使用JSON.strinfy保存为字符串
