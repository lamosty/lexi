import React, { Component } from 'react';

// Dumb component
export default class AboutPage extends Component {
    createMarkup(html) {
        return {
            __html: html
        }

    }

    render() {
        const { page } = this.props;

        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{page.title.rendered}</h2>
                <div dangerouslySetInnerHTML={this.createMarkup(page.content.rendered)} />
            </div>
        );
    }
}