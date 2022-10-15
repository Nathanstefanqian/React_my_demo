import React from 'react';

class SontoParent extends React.Component {
    state = {
        msg: ''
    }
    getChildMsg = (msg) => {
        this.setState({
            msg: msg
        })
    }
    render() {
        return (
            <div>
                子组件：<Child getMsg={this.getChildMsg} />
                父组件接收到的数据为：{this.state.msg}
            </div>
        )
    }
}
export default SontoParent;
class Child extends React.Component {
    state = { childMsg: 'React' }
    handleClick = () => {
        this.props.getMsg(this.state.childMsg)
        // 向getMsg这个属性传递数据并调用父类方法getChildMsg
    }
    render() {
        return (
            <button onClick={this.handleClick}>点我，向父元素传递数据</button>
        )
    }
}