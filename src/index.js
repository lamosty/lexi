import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import LexiTheme from './containers/LexiTheme';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import AboutPageContainer from './containers/AboutPageContainer';
import '../sass/bootstrap.css';
import '../sass/bootstrap-blog.css';

const history = new createBrowserHistory();
const store = configureStore();
let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={LexiTheme}>
                <IndexRoute component={PostsContainer} />
                <Route path=":pageNum" component={PostsContainer} />
                <Route path="about" component={AboutPageContainer} />
                <Route path=":year/:month/:name" component={PostContainer} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);

