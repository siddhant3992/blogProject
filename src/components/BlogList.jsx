import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {GetAction} from '../actions/action';
class BlogList extends Component {
  componentWillMount() {
    this.props.SetGetAction();
    }
  render() {
    return (
      <div className="background">
        <Header />
        <div className="blogList-Container">
        {this.props.posts.map((post, i) => {
          return (
            <Link className="blogList" key={post._id} to={`/ViewBlog/${post._id}`}>
                {post.title}
            </Link>
          );
        })}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SetGetAction: () => {
      dispatch(GetAction());
    }
  };
}
const mapStateToProps = state => {
  return {
    posts: state.reducer
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(BlogList);
