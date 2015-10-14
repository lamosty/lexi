import React, { Component } from 'react';
import AboutPage from '../components/AboutPage';
import { connect } from 'react-redux';
import { fetchAboutPage, receiveAboutPage } from '../actions';
import { bindActionCreators } from 'redux';

// Smart component
class AboutPageContainer extends Component {
    componentWillMount() {
        this.props.fetchAboutPage();
    }

    render() {
        const { data } = this.props;

        return (<AboutPage post={data} />);
    }
}

function mapStateToProps(state) {
    return {
        data: state.aboutPageReducer
    };
}
// We need to connect it to Redux store
export default connect(
    mapStateToProps,
    { fetchAboutPage, receiveAboutPage }
)(AboutPageContainer);

