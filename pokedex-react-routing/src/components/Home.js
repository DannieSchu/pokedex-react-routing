import React, { Component } from 'react';
import request from 'superagent';
import Search from './Search';
import getPokemon from './GetPokemon';


// Import Components
import Header from './Header';
import List from './List';

export default class App extends Component {
    state = {
        pokedeck: [],
        searchOption: 'pokemon',
        searchQuery: this.props.match.params.pokemon
    };

    async loadPokemon() {
        const response = await getPokemon(this.props.match.params.pokemon);
        const pokemonData = response.body.results;
        
        this.setState({ pokedeck: pokemonData })
    }

    async componentDidMount() {
        if (this.props.match.params.pokemon) {
            await this.loadPokemon();
        } 
        else if (!this.props.match.params.pokemon)  {
            const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?`);
            const pokemonData = response.body.results;
    
            this.setState({ pokedeck: pokemonData });}
    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value }); 
    }
    
    handleOption = (e) => {
        this.setState({ searchOption: e.target.value });
    }

    handleSearch = async (e) => {
        e.preventDefault();
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?${this.state.searchOption}=${this.state.searchQuery}`)
        const pokemonData = response.body.results;

        this.setState({ pokedeck: pokemonData });

        this.props.history.push(this.state.searchQuery);
    }

  render() {
        const { pokedeck } = this.state;
        console.log('this.state.searchOption', this.state.searchOption)
        return (
        <main>
            <Header />
            <div className="search-div">
                <Search 
                    searchQuery={this.state.searchQuery}
                    searchOption={this.state.searchOption}
                    handleOption={this.handleOption}
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

