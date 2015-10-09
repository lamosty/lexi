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
        this.props.fetchAboutPage();
    }

    render() {
        console.log('AboutPageContainer props: ', this.props);
        const { data } = this.props;

        return (<AboutPage post={data} />);
    }
}

// We need to connect it to Redux store
export default connect(
    (state) => {
        return {
            data: state.aboutPageReducer
        }
    },
    postActions
)(AboutPageContainer);

