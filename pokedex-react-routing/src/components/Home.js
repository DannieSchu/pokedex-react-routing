import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import request from 'superagent';
import Search from './Search';
import getPokemon from './GetPokemon';


// Import Components
import Header from './Header';
// import PokeItem from './PokeItem';
import List from './List';

export default class App extends Component {
    state = {
        pokedeck: [],
        searchType: [
            {pokemon: "pokemon"}, 
            {type: "" }, 
            {shape: "" }
        ],
        searchQuery: this.props.match.params.pokemon
    };

    async loadPokemon() {
        const response = await getPokemon(this.props.match.params.pokemon);
        const pokemonData = response.body.results;
        
        // set value of pokedeck
        this.setState({ pokedeck: pokemonData })
    }

    // initialize dom nodes
    async componentDidMount() {
        if (this.props.match.params.pokemon) {
            await this.loadPokemon();
        } 
        else if (!this.props.match.params.pokemon)  {
            const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?`);
            const pokemonData = response.body.results;
    
            this.setState({ pokedeck: pokemonData });        }
    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value }); 
    }
    handleClick = (e) => {
        // this.state.searchType.map(item => {
        //     if(item === "search")
        // })
        // this.state.searchType.filter(search => )

        this.setState({ searchType: { search: e.target.value }}); 

    }

    // Define handleSearch methods and pass them as props
    handleSearch = async (e) => {
        e.preventDefault();
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?${this.state.searchType}=${this.state.searchQuery}`)
        const pokemonData = response.body.results;

        this.setState({ pokedeck: pokemonData });

        this.props.history.push(this.state.searchQuery);
    }

  render() {
        const { pokedeck } = this.state;

        return (
        <main>
            <Header />
            <div className="search-div">
                <Search 
                    searchQuery={this.state.searchQuery}
                    handleClick={this.state.handleClick}
                    handleSearch={this.handleSearch}     
                    handleChange={this.handleChange} />
            </div>
            <div>
                <List pokedeck={pokedeck}/>
            </div>
        </main>
    );
  }
}

