import React from 'react';
import '../scss/context.scss'
const { Provider, Consumer } = React.createContext();
class Contextapp extends React.Component {
    render() {
        return (
            <Provider value="anything">
                <div className="Providerapp" width="600px" height="300px">
                    <Node />
                </div>
            </Provider>

        )
    }
}
export default Contextapp;
const Node = props => {
    return (
        <div className="node">
            <SubNode />
        </div>
    )
}
const SubNode = props => {
    return (
        <div className="subnode">
            <Child />
        </div>
    )
}
const Child = props => {
    return (
        <div className="Consumerapp">
            <Consumer>
                {
                    data => <span>我是子节点：--{data}</span>
                }
            </Consumer>
        </div>
    )
}