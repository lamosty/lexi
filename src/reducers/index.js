import { combineReducers } from 'redux';
import pages from './pages';
import posts from './posts';
// TODO: try to import * from './' instead of importing individual reducers

const rootReducer = combineReducers({
    pages,
    posts
});

export default rootReducer;