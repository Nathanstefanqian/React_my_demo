import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 使用router组件包裹整个应用
const First = () => <p>页面一的内容</p>
const Routerapp = () => {
    <Router>
        <div>
            <h1>React路由基础</h1>
            {/* 路由入口 */}
            <Link to="/first">页面一</Link>
            {/* 指定路由出口 */}
            <Route path="/first" component={First} />
        </div>
    </Router>
}
export default Routerapp;