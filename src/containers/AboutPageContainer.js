import React, { Component } from 'react';
import AboutPage from '../components/AboutPage';
import { connect } from 'react-redux';
import { fetchPageIfNeeded } from '../actions';
import { bindActionCreators } from 'redux';
import { DEFAULT_PAGE } from '../reducers/pages';

const PAGE_NAME = 'about';

// Smart component
class AboutPageContainer extends Component {
    componentWillMount() {
        const { fetchPageIfNeeded } = this.props;

        fetchPageIfNeeded(PAGE_NAME);
    }

    render() {
        const { page } = this.props;

        return (<AboutPage page={page} />);
    }
}

function mapStateToProps(state) {
    const page = state.pages[PAGE_NAME] || state.pages[DEFAULT_PAGE];

    return {
        page: page
    };
}
// We need to connect it to Redux store
export default connect(
    mapStateToProps,
    { fetchPageIfNeeded }
)(AboutPageContainer);

