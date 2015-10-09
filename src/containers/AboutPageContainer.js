import React, { Component } from 'react';
import AboutPage from '../components/AboutPage';
import { connect } from 'react-redux';
import * as postActions from '../actions';
import { bindActionCreators } from 'redux';

// Smart component
class AboutPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.nextPost();
    }

    render() {
        console.log('AboutPageContainer props: ', this.props);
        const { post, nextPost } = this.props;

        return (<AboutPage post={post} onNextPost={nextPost} />);
    }
}

// We need to connect it to Redux store
export default connect(
    (state) => {
        return {
            post: state.dummyReducer
        }
    },
    postActions
)(AboutPageContainer);

