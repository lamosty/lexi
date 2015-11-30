import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router';
import Post from '../components/Post';

// Smart component
class PostsContainer extends Component {
    componentWillMount() {
        const { fetchPosts, pageNum = 1 } = this.props;

        fetchPosts(pageNum);
    }

    buildPosts(posts) {
        return posts.map(post =>
            <Post post={post} key={post.id} />
        );
    }

    handlePaginationClick(pageNum) {
        console.log('pagination clicked');

        scroll(0, 0);

        this.props.fetchPosts(pageNum);
    }

    buildPagination(pageNum, totalPages) {
        const prevText = "Previous";
        const nextText = "Next";

        let prevLink = {
            link: <a>{prevText}</a>,
            enabled: false
        };

        let nextLink = {
            link: <Link to={"/" + (pageNum + 1)} onClick={() => this.handlePaginationClick(pageNum + 1)}>{nextText}</Link>,
            enabled: true
        };

        if (pageNum > 1 && pageNum < totalPages) {
            prevLink.link = <Link to={"/" + (pageNum - 1)} onClick={() => this.handlePaginationClick(pageNum - 1)}>{prevText}</Link>;
            prevLink.enabled = true;
        } else if (pageNum == totalPages) {
            nextLink.link = <a>{nextText}</a>;
            nextLink.enabled = false;

            prevLink.link = <Link to={"/" + (pageNum - 1)} onClick={() => this.handlePaginationClick(pageNum - 1)}>{prevText}</Link>;
            prevLink.enabled = true;
        }

        return (
            <nav>
                <ul className="pager">
                    {[prevLink, nextLink].map((link, index) =>
                        <li key={index} className={link.enabled ? "" : "disabled"}>
                            {link.link}
                        </li>
                    )}
                </ul>
            </nav>
        );
    }

    componentDidUpdate() {
    }

    render() {
        const { posts, totalPages, pageNum = 1 } = this.props;

        console.log('PostsContainer:render');

        return (
            <div className="article-listing">

                {this.buildPosts(posts)}

                {this.buildPagination(parseInt(pageNum), totalPages)}

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