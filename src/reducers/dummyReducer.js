import { NEW_POST } from '../actions';

export default function dummyReducer(state = {}, action) {
    switch (action.type) {
        case NEW_POST:
            return action.post;
        default:
            return state;
    }
}
