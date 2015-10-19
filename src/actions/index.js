import fetch from 'isomorphic-fetch';

export const WP_URL = 'http://dev.wp/lexi/wp-json/wp/v2';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';

function receivePage(pageName, pageData) {
    return {
        type: RECEIVE_PAGE,
        payload: {
            pageName: pageName,
            page: pageData
        }
    };
}

export function fetchPageIfNeeded(pageName) {
    return function(dispatch, getState) {
        if (shouldFetchPage(getState(), pageName)) {
            return fetch(WP_URL + '/pages?filter[name]=' + pageName)
                .then(response => response.json())
                .then(pages => dispatch(receivePage(pageName, pages[0])))
        }
    }
}

function shouldFetchPage(state, pageName) {
    const pages = state.pages;

    return !pages.hasOwnProperty(pageName);
}

