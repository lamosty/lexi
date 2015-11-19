import { RECEIVE_POSTS } from '../actions';

const defaultState = {
    posts: [],
    pageNum: 1
};

export default function posts(state = defaultState, action) {
    switch(action.type) {
        case RECEIVE_POSTS:
            const { pageNum, posts } = action.payload;

            return Object.assign({}, state, {
                posts: posts,
                pageNum: pageNum
            });

        default:
            return state;
    }

}