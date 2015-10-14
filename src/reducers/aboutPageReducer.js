import { RECEIVE_ABOUT_PAGE } from '../actions';

let defaultPage = {
    content: {
        rendered: ''
    },
    title: {
        rendered: ''
    }
};

export default function aboutPageReducer(state = defaultPage, action) {
    switch(action.type) {
        case RECEIVE_ABOUT_PAGE:
            return action.data;
        default:
            return state;
    }
}