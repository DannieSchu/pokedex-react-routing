import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li className = 'card-container'>
                <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                <h2>{this.props.pokemon.pokemon}</h2>
                <p>Attack: {this.props.pokemon.attack}; Defense: {this.props.pokemon.defense}</p>
                <p>Height: {this.props.pokfemon.height}; Weight: {this.props.pokemon.weight}</p>
            </li>
        )
    }
}

