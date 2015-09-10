import React, { Component } from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute } from 'react-router';
import configureStore from './store/configureStore';
import LexiTheme from './containers/LexiTheme';
import Article from './containers/Article';
import ArticleListing from './containers/ArticleListing';
import '../sass/bootstrap.css';
import '../sass/bootstrap-blog.css';

const history = new BrowserHistory();
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
                <Route component={LexiTheme}>
                    <Route path="/" component={ArticleListing} />
                    {/*<Route path="about" component={AboutPage} /> */}
                    <Route path="articles" component={ArticleListing} />
                    <Route path="/:year/:month/:name" component={Article} />
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

