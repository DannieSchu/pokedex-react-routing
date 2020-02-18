import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class List extends Component {
    render() {
            // Map over Pokedeck array
        // const { pokedeck } = this.state;

        const mappedPokemon = this.props.pokedeck.map(item => {
            return (
                <Link to={`pokemon/${item.pokemon}`}>
                    <li className = 'card-container'>
                        <img src={item.url_image} alt={item.pokemon} />
                        <h2>{item.pokemon}</h2>
                    </li>
                </Link>
                )
            }
            )
        return (
            <ul className='deck-container'>
            {mappedPokemon}
        </ul>        
        )
    }
}
