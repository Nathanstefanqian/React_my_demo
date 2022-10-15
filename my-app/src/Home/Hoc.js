import React from "react";
import img from '../img/cat.png'

function WithMouse(WrappedComponent) {
    class Mouse extends React.Component {
        state = {
            x: 0,
            y: 0
        }
        handleMouseMove = e => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        componentDidMount() {
            window.addEventListener('mousemove', this.handleMouseMove);
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove);
        }
        render() {
            return <WrappedComponent {...this.state}{...this.props}></WrappedComponent>
        }
    }
    Mouse.displayName = 'WithMouse${ getDiplayName(WrappedComponent) }'
    return Mouse
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const Cat = mouse => {
    return (
        <img id="Catt" src={img} style={{
            position: 'fixed',
            top: mouse.y - 42,
            left: mouse.x - 50,
            width: "100px"
        }} />
    )

}

const Position = props => (
    <p>
        鼠标当前位置：(x:{props.x},y:{props.y})
    </p>
)
// 获取增强后的组件
const MousePosition = WithMouse(Position)
const CatPosition = WithMouse(Cat)
class Hoc extends React.Component {
    render() {
        return (
            <div>
                <h1>高阶组件</h1>
                {/* 渲染增强后的组件 */}
                <MousePosition />
                {/* <CatPosition /> */}
            </div>
        )
    }
}
export default Hoc;