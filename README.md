__Notice__: The project is probably outdated as I haven't maintained it in a while and these technologies tend to move fast. It was created just for learning purpose and it has accomplished that goal for me. If something doesn't work, throws errors, things like that, try to find the culprit and fix it yourself. It's a good training exercise. PRs are welcome.

# [Lexi](https://lamosty.com/2015/09/react-single-page-wordpress-rest-api-theme-tutorial/)

Lexi is an experimental WordPress theme built with [React](https://facebook.github.io/react/) so you won't find much PHP here. It uses [React Router](https://github.com/rackt/react-router) for routing, [Redux](https://github.com/rackt/redux) for managing its state and [WP REST API](https://github.com/WP-API/WP-API) for getting data from the WordPress backend.

I wanted to play with new technologies so I'm using the new JS standard [ES6](https://babeljs.io/docs/learn-es2015/) and [Webpack](http://webpack.github.io/) for building and packaging.

I didn't want to reinvent a blog design so I used [Bootstrap's one](http://v4-alpha.getbootstrap.com/examples/blog/).

## What it can do

- It's super hot,
- It's an example of how to develop WP theme the cutting-edge way,
- It shows posts (with pagination, yay) and pages,
- It uses Webpack dev server with (React) hot loading so is a pleasure to work on.

### What it can't do (yet)

- Not universal (isomorphic),
- Static navigation menu (not dynamically created from WP),
- No widgets,
- It only supports what WP REST API can deliver,
- Is only working from Webpack dev server at the moment (=> can't be used as a standard WP theme).

## Getting Started

Firstly, set up the required WordPress installation:

- WordPress with WP REST API v2,
- Set your permalink structure to "Day and name" (e.g., `http://dev.wp/2015/11/23/sample-post/`).

Clone the repo into the `wp-content/themes` directory and run:

```npm install```

inside it.

Now, create a few sample posts. To see pagination in action, create more than 10. Create an "About" page with the slug (name) `about`. Lexi has this in its navigation menu.

Create a new file `src/wp-url.js` with the following code:

```
export const WP_URL = '<{URL of your blog}/wp-json/wp/v2';
```

to match your WordPress URL address. For example:

```
export const WP_URL = 'http://my-example-blog.com/wp-json/wp/v2';
```

Switch back to your terminal app and run:

```
npm start
```

in the theme's main directory. That will start Webpack dev server on `localhost:3000` and bundle the app into the `dist/` folder. In case you are already using the port `3000`, change it in the `server.js` file.

And that's it. Enjoy the React + React Router + Redux awesomeness!

## Read more

To read more about the theme, its parts and how to build it step by step, [follow my tutorial series](https://lamosty.com/2015/09/react-single-page-wordpress-rest-api-theme-tutorial/).

## Todos

- Make it a standard WP theme (add `functions.php`, etc),
- Add category listing,
- Make it universal (thanks [Jack Lenox](https://github.com/jacklenox) for [inspiration on how to do this](https://github.com/Automattic/Picard/pull/39)),
- Support all the features WP REST API provides.

## Contributing

Lexi is an open source project so feel free to report issues and make pull requests.

