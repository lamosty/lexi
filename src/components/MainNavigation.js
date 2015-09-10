import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainNavigation extends Component {
    render() {
        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="nav blog-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/articles" className="nav-link">Articles</Link>
                        <Link to="/2015/02/some-article" className="nav-link">Some Article</Link>
                    </nav>
                </div>
            </div>
        );
    }
}