import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { Link } from "react-router-dom";
import {DeleteAction} from '../actions/action'
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
                <button
                  className="subbtn"
                  onClick={() =>this.props.DeleteAction(post._id)}>
                  Delete
                </button>
                <Link to={`/EditBlog/${post._id}`}>
                  <button className="subbtn">Edit</button>
                </Link>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    DeleteAction: (id) => {
      dispatch(DeleteAction(id));
    }
  };
};
const mapStateToProps = state => {
  return {
    posts: state.reducer
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(ViewBlog);
