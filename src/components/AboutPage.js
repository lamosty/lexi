import React, { Component } from 'react';

// Dumb component
export default class AboutPage extends Component {
    render() {
        const { post, onNextPost } = this.props;
        console.log('about page props: ', this.props);
        return (
            <div className="blog-post">
                <h2 className="blog-post-title">About</h2>
                <p>This is a demonstration of how we can create a simple single-page WordPress theme easily and quickly
                    thanks to WP REST API, React, React-Router and Redux (and Webpack).
                </p>
                <button onClick={onNextPost}>Next Post</button>
                {post.content}
            </div>
        );
    }
}