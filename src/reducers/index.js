import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer';
import aboutPageReducer from './aboutPageReducer';

const rootReducer = combineReducers({
    dummyReducer,
    aboutPageReducer
});

export default rootReducer;