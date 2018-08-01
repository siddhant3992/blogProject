import React, { Component } from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <br />
        <Link className="link" to="/BlogList">
          <button className="subbtn">All Posts</button>
        </Link>
        <Link className="link" to="/AddBlog">
          <button className="subbtn">Add New Post</button>
        </Link>
      </div>
    );
  }
}

export default connect()(App);
