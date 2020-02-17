import React, { Component } from 'react';
import PokeItem from './PokeItem';

export default class List extends Component {
    render() {
        const mappedPokemon = this.props.pokedeck.map(item => {
            return (
                <PokeItem pokemon={item} key={item.id.toString()} />
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
