import React from "react";
// 采用了兄弟组件通讯的思想
class Counter extends React.Component {
    state = {
        count: 0
    }
    onIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <Child1 count={this.state.count} />
                <Child2 onIncrement={this.onIncrement} />
                {/* 属性名调用这个方法 */}
            </div>
        )
    }

}
// 函数组件
// props在类中相当于类的成员，数据成员以及函数成员
const Child1 = props => {
    return <h1>计数器：{props.count}</h1>
}

const Child2 = props => {
    return <button onClick={() => props.onIncrement()}>+1</button>
    // 点击事件调用onIncrement函数
}
export default Counter;