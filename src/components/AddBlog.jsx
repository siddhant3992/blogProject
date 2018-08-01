import React, { Component } from "react";
import {connect} from 'react-redux';
import uuid from 'uuid'
import Header from "./Header";
import {AddAction} from '../actions/action'
class AddBlog extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.Title.value;
    const author = this.author.value;
    const blog = this.blog.value;
    const localData = {
      _id: uuid.v4(),
      title,
      author,
      blog
    };
    this.props.AddAction(localData)
    this.Title.value = "";
    this.author.value = "";
    this.blog.value = "";
    
  };
  render() {
    return (
      <div className="addblog">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input
            className="textbox"
            type="text"
            ref={input => (this.Title = input)}
            placeholder="Enter the title of your blog"
            required autoFocus
          />
          <br />
          <input
            className="textbox"
            type="text"
            ref={input => (this.author = input)}
            placeholder="Author Name"
            required/>
          <br />
          <textarea
            className="textarea"
            ref={input => (this.blog = input)}
            placeholder="write your blog here"
            required/>
          <br />
          <button className="subbtn" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AddAction: (localData) => {
      dispatch(AddAction(localData));
    }
  };
};

export default connect(null,mapDispatchToProps)(AddBlog);