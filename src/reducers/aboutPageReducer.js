import { RECEIVE_ABOUT_PAGE } from '../actions';

export default function aboutPageReducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_ABOUT_PAGE:
            return action.data;
        default:
            return state;
    }
}