import React, { Component } from 'react'
export default class Demo extends Component {
    state = { count: 0 }
    add = () => {
        // 对象式的setState
        // 1.获取原来的Count值
        const { count } = this.state
        // 2.更新状态
        this.setState({ count: count + 1 }, () => {
            console.log(this.state.count);
            // 这里指更新后的count
        })
        // // 函数式的setState
        this.setState(state => ({ count: state.count + 1 }))
        // // setstate方法能拿到state和props
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}

// 1.对象式的setState是函数式的setState的简写方式(语法糖)
// 2.使用原则：
//         (1).如果新状态不依赖于原状态 ===> 使用对象方式
//         (2).如果新状态依赖于原状态 ===> 使用函数方式
//         (3).如果需要在setState()执行后获取最新的状态数据,
//             要在第二个callback函数中读取