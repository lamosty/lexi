import React, { Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute } from 'react-router';
import configureStore from './store/configureStore';
import LexiTheme from './containers/LexiTheme';
import ArticlePage from './containers/ArticlePage';
import ArticleListingPage from './containers/ArticleListingPage';
import AboutPage from './containers/AboutPage';
import '../sass/bootstrap.css';
import '../sass/bootstrap-blog.css';

const history = new createBrowserHistory();
const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => this.renderRoutes(history)}
            </Provider>
        );
    }

    renderRoutes(history) {
        return (
            <Router history={history}>
                <Route path="/" component={LexiTheme}>
                    <Route path="/" component={ArticleListingPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/:year/:month/:name" component={ArticlePage} />
                </Route>
            </Router>
        );
    }
}

let rootElement = document.getElementById('root');

React.render(
    <Root />,
    rootElement
);

