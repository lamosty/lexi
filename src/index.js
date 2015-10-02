import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import LexiTheme from './containers/LexiTheme';
import ArticlePage from './containers/ArticlePage';
import ArticleListingPage from './containers/ArticleListingPage';
import AboutPage from './containers/AboutPage';
import '../sass/bootstrap.css';
import '../sass/bootstrap-blog.css';

const history = new createBrowserHistory();
const store = configureStore();
let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={LexiTheme}>
                <IndexRoute component={ArticleListingPage} />
                <Route path="about" component={AboutPage} />
                <Route path=":year/:month/:name" component={ArticlePage} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);

