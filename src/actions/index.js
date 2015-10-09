export const NEW_POST = 'NEW_POST';

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