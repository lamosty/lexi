import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    console.log('initial state: ', initialState);
    console.log('store: ', store);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
