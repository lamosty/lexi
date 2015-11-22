import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from '../components/Post';

// Smart component
class PostsContainer extends Component {
    componentWillMount() {
        const { fetchPosts } = this.props;

        fetchPosts();
    }

    buildPosts(posts) {
        return posts.map(post =>
            <Post post={post} key={post.id} />
        );
    }

    render() {
        const { posts } = this.props;
        console.log(this.props);

        return (
            <div className="article-listing">

                {this.buildPosts(posts)}

                <nav>
                    <ul className="pager">
                        <li><a href="#">Older</a></li>
                        <li className="disabled"><a href="#">Newer</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        pageNum: state.posts.pageNum,
        totalPages: state.posts.totalPages
    };
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostsContainer);