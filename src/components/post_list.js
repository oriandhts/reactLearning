import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post'
class PostList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    componentDidMount() {
        this.props.dispatch(loadPostsAction)
    }
    render() {
        const { list } = this.props.post
        const Props = list.map(post => { return (<li key={post.id} >{post.title}</li>) })    // console.log(list)
        return (
            <div>
                <ul>
                    {Props}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        post: state.post
    }
}
export default connect(mapStateToProps)(PostList)