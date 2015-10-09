import React, { Component } from 'react';
import AboutPage from '../components/AboutPage';
import { connect } from 'react-redux';
import { nextPost } from '../actions';

// Smart component
class AboutPageContainer extends Component {
    constructor(props) {
        super(props);

        this.handleNextPost = this.handleNextPost.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(nextPost());
    }

    handleNextPost() {
        console.log('handleNextPost props: ', this.props);
        const { dispatch } = this.props;
        dispatch(nextPost());
    }

    render() {
        console.log('AboutPageContainer props: ', this.props);
        const { post } = this.props;

        return (<AboutPage post={post} onNextPost={this.handleNextPost} />);
    }
}

// We need to connect it to Redux store
export default connect(
    (state) => {
        return {
            post: state.dummyReducer
        }
    }
)(AboutPageContainer);

