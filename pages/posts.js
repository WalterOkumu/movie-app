import React from 'react'

import { getPosts } from '../actions'
 
class Posts extends React.Component {

    static async getInitialProps() {
        const posts = await getPosts()

        return { posts }
    }

    render() {
        const { posts } = this.props

        return (
            <div className = 'container'>
                <h1>I am Posts Page</h1>
                {
                    posts.map(post => (
                        <ul key = {post.id}>
                            <li>
                                <span>
                                    {post.id}: 
                                </span>

                                <span>
                                    {post.title}
                                </span>
                            </li>
                        </ul>
                    ))
                }
            </div>
        )
        
    }
}

export default Posts