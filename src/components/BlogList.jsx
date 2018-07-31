import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class BlogList extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        {this.props.posts.map((post, i) => {
          return (
            <Link className="blogList" key={post._id} to={`/ViewBlog/${post._id}`}>
                {post.title}
            </Link>
          );
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
export default connect(mapStateToProps)(BlogList);
