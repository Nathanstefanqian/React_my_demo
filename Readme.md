### 组件卸载的问题

在使用

ReactDOM.unmountComponentAtNode(document.getElementById('root'))

卸载组件时报错如下：

the node you're attempting to unmount was rendered by react and is not a top-level container。

网上搜到的对应原理和方案没有完全看懂

https://blog.csdn.net/PureSky12/article/details/126029911

后来引入root

使用root.unmount()方法解决了这个问题



### useEffect的渲染问题

在index.js目录下渲染dom时使用了react严格模式，useEffect会执行两次

这是为什么 以及在实际项目里需要使用这个严格模式吗？

### 路由旧版本安装不了的问题

想学习使用一下旧版本的router5以便对照理解新版本的router8

但是执行 npm i react-router-dom@5.2.0

还是会安装8的版本。。



### 组件复用问题

目前学习了 render props 和高阶组件的组件复用方法

在函数式编程中 是不是一般都用后者？（还是有其他的更高效的复用方法）



### 生命周期问题

![img](https://img-blog.csdnimg.cn/01f15ccef14447d58524767865f2360c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pyI5b2xV0VC,size_20,color_FFFFFF,t_70,g_se,x_16)

找到一张感觉不错的描述类组件的生命周期的图并且总结了下面我认为在类中重要的钩子函数

在函数组件使用useEffect以及其他hooks时，应该重点关注哪些等价的部分？

1.创建时

constructor()-->render()-->componentDidMount（完成dom渲染后进行ajax请求和dom操作）

2.更新时

shouldComponentUpdate->componentWillUpdate->componentDidUpdate

3.卸载时

componentwillunmount->componentdidunmount



hooks:

useEffect ==>compomentDidMount, componentwillunmount ,componentDidupdate



  useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行



### 前后端对接的问题

在实际工程里，实现对接需要学习ajax语言吗？

看到现在流行的前端框架都是vue，react

但是又有说很多大牌老牌网站还是基于jquery写的

未来还有必要学习jquery吗?











