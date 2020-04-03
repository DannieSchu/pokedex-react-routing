import request from 'superagent';

const getPokemon = (pokemon) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${pokemon}`)


export default getPokemon;