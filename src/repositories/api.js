import api from '../config';
import { toast } from 'react-toastify';

const URL_API = `${api.URL_POKEMON}`;

function getPokemons(typePokemon) {
  let idTypePokemon = 0;
  switch (typePokemon) {
    case 'Fighting':
      idTypePokemon = 2;
      break;
    case 'Flying':
      idTypePokemon = 3;
      break;
    case 'Poison':
      idTypePokemon = 4;
      break;
    case 'Rock':
      idTypePokemon = 6;
      break;
    case 'Ghost':
      idTypePokemon = 8;
      break;
    case 'Fire':
      idTypePokemon = 10;
      break;
    case 'Water':
      idTypePokemon = 11;
      break;
    case 'Grass':
      idTypePokemon = 12;
      break;
    case 'Electric':
      idTypePokemon = 13;
      break;
    case 'Psychic':
      idTypePokemon = 14;
      break;
    case 'Ice':
      idTypePokemon = 15;
      break;
    case 'Dragon':
      idTypePokemon = 16;
      break;
    default:
  }

  return fetch(`${URL_API}${idTypePokemon}/`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        const pokemons = result.pokemon.map((data, index) => ({
          name: data.pokemon.name,
          id: data.pokemon.url.split('/', 7).slice(-1).toString(),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokemon.url
            .split('/', 7)
            .slice(-1)
            .toString()}.png`,
          quantity: 1,
          price: Math.floor(Math.random() * 100),
        }));
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
        return result;
      }

      throw new Error('Não foi possível pegar os dados das Categorias');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}
function clearCache() {
  document.getElementById('title').innerText = 'PokeStore';
  localStorage.clear();
}

export default {
  getPokemons,
  clearCache,
};
