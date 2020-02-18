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
                <div>
                    <PokeItem pokemon={pokemon} />
                </div>
                <div className="card-container">
                    <table>
                        <tr>
                            <div className="left">
                                <th>Attack: </th>
                                <td>{this.state.pokemon.attack}</td>
                            </div>
                            <div className="right">
                                <th>Defense: </th>
                                <td>{this.state.pokemon.defense}</td>
                            </div>
                        </tr>
                        <tr>
                            <div className="left">
                                <th>Height: </th>
                                <td>{this.state.pokemon.height}</td>
                            </div>
                            <div className="right">
                                <th>Weight: </th>
                                <td>{this.state.pokemon.weight}</td>
                            </div>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
        )
    }
}
