import React, { Component } from 'react';

// Dumb component
export default class AboutPage extends Component {
    createMarkup(html) {
        return {
            __html: html
        }

    }

    render() {
        const { post } = this.props;
        console.log('about page props: ', this.props);
        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{post.title}</h2>
                <div dangerouslySetInnerHTML={this.createMarkup(post.content)} />
            </div>
        );
    }
}