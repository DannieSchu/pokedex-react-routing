import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';


// Import Components
import Header from './Header';
import PokeItem from './PokeItem';

export default class App extends Component {
    state = {
        pokedeck: [],
    };

    async loadPokemon() {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)
        const pokemonData = response.results;

        // set value of pokedeck
        this.setState({ pokedeck: pokemonData.results})
    }

    // initialize dom nodes
    async componentDidMount() {
        if (this.props.match.params.pokemon) {
            await this.loadPokemon();
        }   
    }

  render() {
    // Map over Pokedeck array
    const { pokedeck } = this.state;
    console.log(pokedeck)
    
    const mappedPokemon = pokedeck.map(item => {
        return (
            <Link to={`pokemon/${pokedeck.pokemon}`}>
                <PokeItem pokemon={item} key={item.id.toString()} />
            </Link>
            )
        }
    )
        return (
        <div className = "body">
            <Header />
            <main>
                <ul className='deck-container'>
                    {mappedPokemon}
                </ul>        
            </main>
        </div>
    );
  }
}

