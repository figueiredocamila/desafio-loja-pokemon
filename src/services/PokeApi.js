import Axios from 'axios';

export default {
  getPokemonList() {
    return Axios.get(`https://pokeapi.co/api/v2/type/${process.env.VUE_APP_POKEMON_TYPE}/`);
  },
};
