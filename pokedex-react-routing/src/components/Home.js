import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';
import Search from './Search';


// Import Components
import Header from './Header';
import PokeItem from './PokeItem';

export default class App extends Component {
    state = {
        pokedeck: [],
        searchQuery: this.props.match.params.pokemon
    };

    async loadPokemon() {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`);
        const pokemonData = response.body.results;
        
        // set value of pokedeck
        this.setState({ pokedeck: pokemonData })
    }

    // initialize dom nodes
    async componentDidMount() {
        if (this.props.match.params.pokemon) {
            await this.loadPokemon();
        }   
    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value }); 
    }

    // Define handleSearch methods and pass them as props
    async handleSearch () {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
        const pokemonData = response.body.results;

        this.setState({ pokedeck: pokemonData });

        // this.props.history.push(this.state.searchQuery);
    }

  render() {
    // Map over Pokedeck array
    const { pokedeck } = this.state;
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
            <Search 
                searchQuery={this.state.searchQuery}
                handleSearch={this.handleSearch}     
                handleChange={this.handleChange} />
            <main>
                <ul className='deck-container'>
                    {mappedPokemon}
                </ul>        
            </main>
        </div>
    );
  }
}

