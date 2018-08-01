import React, { Component } from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import { Link } from "react-router-dom";
import {UpdateAction} from '../actions/action'
class EditBlog extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.Title.value;
    const author = this.author.value;
    const blog = this.blog.value;
    const localData = {
      _id: this.props.match.params.id,
      title,
      author,
      blog
    };
    this.props.UpdateAction(localData)
    this.Title.value = "";
    this.author.value = "";
    this.blog.value = "";
    
  };
  render() {
    return (
      
      <div className="addblog">
        <Header />
        {this.props.posts.map((post, i) => {
          if (post._id === this.props.match.params.id) {
            return (
              <form onSubmit={this.handleSubmit}>
              <input
                className="textbox"
                type="text"
                defaultValue={post.title}
                ref={input => (this.Title = input)}
                placeholder="Enter the title of your blog"
                required autoFocus
              />
              <br />
              <input
                className="textbox"
                type="text"
                defaultValue={post.author}
                ref={input => (this.author = input)}
                placeholder="Author Name"
                required/>
              <br />
              <textarea
                className="textarea"
                defaultValue={post.blog}
                ref={input => (this.blog = input)}
                placeholder="write your blog here"
                required/>
              <br />
              <button className="subbtn" type="submit">
                UPDATE
              </button>
             
            </form>
            );
          }
        })}

        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    UpdateAction: (localData) => {
      dispatch(UpdateAction(localData));
    }
  };
};
const mapStateToProps = state => {
  return {
    posts: state.reducer
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditBlog);