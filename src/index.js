import React, { Component } from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './containers/App';

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
                <Route path="/" component={App}>
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

