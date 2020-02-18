import React, { Component } from 'react'
import getPokemon from './GetPokemon';
import PokeItem from './PokeItem';

export default class Detail extends Component {
    state = { pokemon: {} }

    async componentDidMount() {
        const response = await getPokemon(this.props.match.params.pokemon)

        const pokemonData = response.body.results;

        if (pokemonData) {
            this.setState({ pokemon: pokemonData[0] })
        }
    }
    
    render() {
        const { pokemon } = this.state;

        return (
            <main>
                <div className="detail-container">
                    <PokeItem pokemon={pokemon} />
                </div>
            </main>
        )
    }
}
