import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
class ViewBlog extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        {this.props.posts.map((post, i) => {
          if (post._id === this.props.match.params.id) {
            return (
              <div className="blog-body" key={post._id}>
                <h1 className="blogtitle">{post.title}</h1>
                <h3 className="author">{post.author}</h3>
                <p className="blog-desc">{post.blog}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.reducer
  };
};
export default connect(mapStateToProps)(ViewBlog);
