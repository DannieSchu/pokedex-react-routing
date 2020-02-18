import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="heading-container">
                    <h1>Pokemon</h1>
                </div>
                <div className="links">
                    <NavLink exact to="/" activeStyle={{backgroundColor: "rgb(200, 150, 85)" }}>Home</NavLink>
                    <NavLink to="/pokemon" activeStyle={{backgroundColor: "rgb(190, 132, 85)" }}>Pokemon</NavLink>
                    <NavLink to="/about" activeStyle={{backgroundColor: "rgb(190, 171, 85)" }}>About</NavLink>
                </div>
            </header>
        )
    }
}