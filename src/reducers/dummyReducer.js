import { NEW_POST } from '../actions';

export default function dummyReducer(state = {}, action) {
    switch (action.type) {
        case NEW_POST:
            console.log('dummy reducer NEW POST', action.post);
            return action.post;
        default:
            return state;
    }
}
