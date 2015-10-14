import fetch from 'isomorphic-fetch';

export const WP_URL = 'http://dev.wp/lexi/wp-json/wp/v2';
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
    console.log('receive', json[0]);
    return {
        type: RECEIVE_ABOUT_PAGE,
        data: json[0]
    };
}


function fetchPage(pageName) {
    return fetch(WP_URL + '/pages?filter[name]=' + pageName);
}

export function fetchAboutPage() {
    console.log('fetching');
    return function(dispatch) {
        return fetchPage('about')
        .then(response => response.json())
        .then(json => dispatch(receiveAboutPage(json)))
    }
}

