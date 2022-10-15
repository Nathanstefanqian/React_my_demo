// 这个组件运用了父对子传递的原理

import React from 'react';
class Parent extends React.Component {
    state = { lastname: '' }
    handleClick = e => {
        this.setState({
            lastname: e.target.value
        })
    }
    render() {
        return (
            <>
                <input onChange={this.handleClick}></input>
                <div>
                    传递数据给子组件：<Child name={this.state.lastname} />
                </div>
            </>
        )
    }
}
export default Parent;
const Child = props => {
    return <div>子组件接收到的数据为：{props.name}</div>
}  