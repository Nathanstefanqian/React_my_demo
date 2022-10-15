import React from "react";
// 用来研究生命周期的js

class Circle extends React.Component {
    prime = () => {
        for (var i = 0; i <= 2; i++) {
            console.log('sushu');
        }
    }
    handleClick = () => {
        { this.prime() }
    }
    render() {
        return (
            <div>
                <h1>统计豆豆被打的次数：</h1>
                <button className="btn" onClick={this.handleClick}>打豆豆</button>
            </div>

        )
    }
}
export default Circle;