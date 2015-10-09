import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainNavigation extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="nav blog-nav">
                        <Link to="/" className="nav-link" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
                        <Link to="/2015/02/some-article" className="nav-link" activeClassName="active">Some Article</Link>
                        <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                    </nav>
                </div>
            </div>
        );
    }
}