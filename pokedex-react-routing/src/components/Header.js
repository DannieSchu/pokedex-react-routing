import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Search from './Search';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="heading-container">
                    <h1>Pokemon</h1>
                    {/* <Search /> */}
                </div>
                <div className="links">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <Link to="/pokemon">Pokemon</Link>
                    <Link to="/about">About</Link>
                </div>
            </header>
        )
    }
}