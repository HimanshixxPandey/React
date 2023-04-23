
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          color: "blue",
          justifyContent: "center",
          padding: "1rem",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{textDecoration:'none'}}>
          <h1 >Movies App</h1>
        </Link>
        <Link to="/favourites" style={{textDecoration:'none'}}>
        <h2 style={{ marginLeft: "2rem" }}>Favourites</h2></Link>
      </div>
    );
  }
}

