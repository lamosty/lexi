import fetch from 'isomorphic-fetch';

export const NEW_POST = 'NEW_POST';
export const RECEIVE_ABOUT_PAGE = 'RECEIVE_ABOUT_PAGE';

let dummyPost = {
    ID: 1,
    title: "Hello World",
    content: "Welcome to my super post"
};

export function nextPost() {
    return {
        type: NEW_POST,
        post: dummyPost
    };
}

function receiveAboutPage(json) {
    return {
        type: RECEIVE_ABOUT_PAGE,
        data: json[0]
    };
}

export function fetchAboutPage() {
    return function(dispatch) {
        return fetch('http://dev.wp/lexi/wp-json/posts?type=page&filter[page_id]=4')
        .then(response => response.json())
        .then(json => dispatch(receiveAboutPage(json)))
    }
}