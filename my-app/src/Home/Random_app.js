import React from "react";
class Randomapp extends React.Component {
    state = {
        number: 0
    }
    handleClick = () => {
        this.setState(() => {
            return {
                number: Math.floor(Math.random() * 100)
            }
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.number === this.state.number) {
            return false;
        }
        return true;
    }
    render() {
        return (
            <div>
                <h1>随机数：{this.state.number}</h1>
                <button onClick={this.handleClick}>重新生成</button>
            </div>
        )
    }
}
export default Randomapp;