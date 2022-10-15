import React from "react";
import img from '../img/cat.png'
import PropTypes from 'prop-types'
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
    render() {
        // return this.props.render(this.state)
        return this.props.children(this.state)
        // children属性能将括号里的内容作为参数传递给函数组件
    }

    // 推荐在组件卸载时移除组件
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
}
// 添加属性校验
Mouse.propTypes = {
    children: PropTypes.func.isRequired
}

class MouseApp extends React.Component {
    render() {
        return (
            <div>
                <h1>render props模式</h1>
                <Mouse>{mouse => { return (<p>鼠标位置：{mouse.x} {mouse.y}</p>) }}</Mouse>
                {/* <Mouse render={(mouse) => {
                    return <img id="Catt" src={img} style={{
                        position: 'fixed',
                        top: mouse.y - 42,
                        left: mouse.x - 50,
                        width: "100px"
                    }} />
                }} /> */}
            </div>
        )
    }

}
export default MouseApp;