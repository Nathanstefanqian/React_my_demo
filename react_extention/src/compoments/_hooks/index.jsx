import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import root from '../../index'
// export default class Demo extends Component {
//     state = {
//         count: 0
//     }
//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <>
//                 <h1>当前数字为:{this.state.count}</h1>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//             </>
//         )
//     }
// }
export default function Demo() {
    const [count, setCount] = React.useState(0);
    // 只在初次调用Demo时赋值
    // console.log(count, setCount);

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount(count + 1)
        // setCount(count => count + 1)
    }
    function des() {
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        root.unmount()

    }
    // 相当于didupdate后的内容
    // 第二个参数用来监测函数内state的变化，不写任何内容代表全监测，空数组代表无监测
    return (
        <>
            <h2>当前求和为:{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={des}>卸载组件</button>
        </>
    )
}
