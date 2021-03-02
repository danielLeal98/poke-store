import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';
import { DivHeader } from './styles';
import api from '../../repositories/api';
import pokeball from '../../assets/pokeballCart.png';

function Header({ bgColor, typePokemon, pokemons, setCatalogItens }) {
  function handleSearch(e) {
    const term = e.target.value;
    if (term) {
      const filteredItens = pokemons.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setCatalogItens(filteredItens);
    } else {
      setCatalogItens(pokemons);
    }
  }
  const arrayShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  const items = arrayShoppingCart.map((pokemon) => {
    return pokemon.quantity;
  });
  const totalItens = items.reduce((sum, quantity) => sum + quantity, 0);
  return (
    <DivHeader bgColor={bgColor}>
      <div className="subHeader">
        <div className="divType">
          <img
            className="imgType"
            src={require(`../../assets/` + typePokemon.toLowerCase() + `.png`)}
            alt={typePokemon}
          />
        </div>
        <div className="divLogo">
          <Link to="/">
            <img
              className="imgLogo"
              src={Logo}
              alt="PokeStore"
              onClick={api.clearCache}
            />
          </Link>
        </div>

        <div className="divInput">
          <input
            type="text"
            className="inputSearch"
            placeholder="Busque aqui seu produto"
            onChange={handleSearch}
          />
        </div>
        <div className="divPokebola">
          <small data-stage="buy" className="qtdBall">
            {totalItens ? totalItens : 0}
          </small>
          <img
            className="Logo"
            class="pokeballCart"
            src={pokeball}
            alt="Pokebola"
          />
        </div>
      </div>
    </DivHeader>
  );
}

export default Header;
