import React, { Component } from 'react';

export default class AboutPage extends Component {
    render() {
        console.log(this.props);
        const { post, nextPost } = this.props;
        return (
            <div className="blog-post">
                <h2 className="blog-post-title">About</h2>
                <p>This is a demonstration of how we can create a simple single-page WordPress theme easily and quickly
                    thanks to WP REST API, React, React-Router and Redux (and Webpack).
                </p>
                <button onClick={nextPost}>Next Post</button>
                {post}
            </div>
        );
    }
}