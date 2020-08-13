import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';
import { DivHeader, ButtonSearch } from './styles';
import api from '../../repositories/api';
import { FiSearch } from 'react-icons/fi';

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
  return (
    <DivHeader bgColor={bgColor}>
      <Link to="/">
        <img
          className="Logo"
          src={Logo}
          alt="PokeStore"
          onClick={api.clearCache}
        />
      </Link>
      <div className="divLogo">
        <img
          className="Logo"
          src={require(`../../assets/` + typePokemon + `.png`)}
          alt={typePokemon}
        />
      </div>
      <div className="divSearch">
        <input
          type="text"
          className="inputSearch"
          placeholder="Busque aqui seu produto"
          onChange={handleSearch}
        />
      </div>
    </DivHeader>
  );
}

export default Header;
