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

引用 id:nanoid()


### 消息订阅与发布，安装一种库
```
npm i pubsub-js
```




### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

组件拆分成
Header 添加框
List 选择框
Item 子选择框
Footer 全选/已选框

1.组件化编码流程:
(1).拆分静态组件:组件要按照功能点拆分，命名不要与 html 元素冲突。
(2).实现动态组件:考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
        1).一个组件在用:放在组件自身即可。
        2).一些组件在用:放在他们共同的父组件上(状态提升)。
(3).实现交互:从绑定事件开始。

2.props 适用于:
(1).父组件==>子组件通信
(2).子组件==>父组件通信（要求父先给子一个函数）

3.使用 v-model 时要切记: v-model 绑定的值不能是 props 传过来的值，因为 props 是不可以修改的!

4.props 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不推荐这样做。

5. 本地存储，watch 监视数据，使用 JSON.strinfy 保存为字符串

6.自定义事件，
（1）适用于 父子间通信，不用props接受数据，简化
（2）使用方法：父向子传送数据时，在函数前面可以添加@,
方便以后子调用父·的数据再向父输送改变后的数据
子调用该函数时，使用 this.$emit('函数名'，传参)

7.全局事件总线：适用于任意组件间通信，最适用于：
（1）孙组件 ==> 爷组件通信
（2）爷组件 ==> 孙组件通信
本质还是自定义事件

8.根节点Main.js 挂载beforeCreate中:创建组件实例vm时使用，该实例可以使用事件总线进行事件的监听和触发。
beforeCreate(){Vue.prototype.$bus = this}

9.【爷收】数据绑定的绑定事件总线中的自定义事件，
在【收的method中】mounted挂载时，使用this.$bus.$on('调用函数',this的函数名)进行绑定，
【销毁】在挂载中的beforeDestory()中使用this.$bus.$off('函数名')进行解绑
【孙触发】      this.$bus.$emit('函数名',id参数)

10.消息订阅与发布 pub sub-js
安装后引入，【订阅】（同全局接收）同样是在mounted挂载中，
### this指向vc  ，需要 使用箭头函数 或者函数放在方法中 
使用 pubsub.$subscribe('消息名',（回调函数的消息名，数据）=>{ log(this)  }) 

类似定时器，需要this.pubid接收即 this.pubid=pubsub.$subscribe...

【销毁】挂载中的 beforeDestory() 中使用 pubsub.unsubscribe(this.pubid)
【发布】（同全局的触发）pubsub.publish('消息名',数据)

响应式的向对象中添加熟悉 this.$set(对象，‘属性’，true)

11.nextTick 在DOM结点解析完后执行