import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="heading">Blogger's Spot</h1>
    <div>
      <Link className="link" to="/">HOME</Link>
    </div>
      </div>
    )
  }
}
