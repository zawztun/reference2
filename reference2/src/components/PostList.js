import React, { Component } from 'react';
import axios from 'axios'  // yarn add axios


export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    componentDidMount() {
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(response => {console.log(response)
            this.setState({posts: response.data}) 
        })
        .catch(error => {
            console.log(error)
        })
    }

    // renderList (){
    //     const {posts } = this.state
    //     return  (
    //         posts.length ?
    //         posts.map(post => <div key = {post.id}> {post.title}</div>) :
    //      null

    //     )
    // }

    
    render() {   
        const {posts } = this.state 
        return (
            <div>
               <h2>List of Post</h2> 
            {posts.length ?
            posts.map(post => <div key = {post.id}> {post.title}</div>) :
            null}
                   {/* {this.renderList}
                <button onClick = {showPost}>ShowMe</button>  */}
            </div> 
        )
    }
}

export default PostList
