import React, { Component } from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute } from 'react-router';
import LexiTheme from './containers/LexiTheme';

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
                <Route path="/" component={LexiTheme}>
                    <DefaultRoute component={ArticlesListingPage} />
                    <Route path="about" component={AboutPage} />
                    <Route path="articles" component={ArticlesListingPage} />
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

