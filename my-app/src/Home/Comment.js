import React from "react";

class Comments extends React.Component {
    state = {
        comments: [
            // { id: 1, name: 'jack', content: 'cool!' },
            // { id: 2, name: 'demon', content: 'good!' },
            // { id: 3, name: 'lucky', content: 'excellent!' }
        ],
        txt: '',
        content: '',
        cnt: 1
    }
    handleForm = e => {
        const target = e.target
        const name = target.name
        this.setState({
            [name]: target.value
        })
    }
    handleClick = () => {
        const { comments, cnt, txt, content } = this.state
        if (txt.trim() === '' || content.trim() === '') {
            alert('请在表单里输入内容！')
            return
        }
        const newComments = [{ id: cnt, name: txt, content: content }, ...comments]
        this.setState({
            cnt: this.state.cnt + 1,
            comments: newComments,
            txt: '',
            content: ''
        })
    }
    myComment = () => {
        const { comments } = this.state
        return (
            comments.length === 0 ? (
                <div className='no-comment'>暂无评论，快去评论吧</div>
            ) : (
                <ul>
                    {
                        this.state.comments.map(item => (
                            <li key={item.id}>
                                <h3>评论人：{item.name}</h3>
                                <p>评论内容：{item.content}</p>
                            </li>
                        ))
                    }
                </ul>))
    }
    render() {
        const { txt, content } = this.state
        // 解构
        return (
            <div className="app">
                <div>
                    <input className="user" name="txt" value={txt} onChange={this.handleForm} type="text" placeholder="请输入评论人" />
                    <br />
                    <textarea className="content" name="content" value={content} onChange={this.handleForm} cols="30" rows="10" placeholder="请输入评论内容" />
                    <br />
                    <button onClick={this.handleClick}>发表评论</button>
                </div>
                <div>{this.myComment()}</div>
            </div>
        )
    }
}
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container)
// root.render(<App />)
export default Comments;



