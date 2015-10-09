import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LexiActions from '../actions';
import MainNavigation from '../components/MainNavigation';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class LexiTheme extends Component {
    render() {
        return (
            <div>
                <MainNavigation data={this.props} />
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 blog-main">
                            {this.props.children}
                        </div>
                        <Sidebar />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(LexiActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LexiTheme);