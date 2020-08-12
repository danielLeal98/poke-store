import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DivHeader from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogProducts from '../../components/CatalogProducts';

function Store() {
  const [cartItens, setCartItens] = useState(
    JSON.parse(localStorage.getItem('shoppingCart'))
      ? [...JSON.parse(localStorage.getItem('shoppingCart'))]
      : []
  );
  const [catalogItens, setCatalogItens] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  function updateCart() {
    const result = cartItens.map((element) => element.price * element.quantity);
    const total = result.reduce((sum, price) => sum + price, 0);
    localStorage.setItem('totalShoppingCart', JSON.stringify(total));
    localStorage.setItem('shoppingCart', JSON.stringify(cartItens));
  }

  updateCart();
  let location = useLocation();
  const typePokemon = location.pathname.substring(1);
  const bgColor = `var(--${typePokemon});`;

  const urlTypePokemon =
    typePokemon.charAt(0).toUpperCase() + typePokemon.slice(1);

  const bgColorButton = `var(--button${urlTypePokemon});`;

  return (
    <>
      <DivHeader
        bgColor={bgColor}
        pokemons={pokemons}
        setCatalogItens={setCatalogItens}
        typePokemon={urlTypePokemon}
      />
      <CatalogProducts
        setCartItens={setCartItens}
        cartItens={cartItens}
        setCatalogItens={setCatalogItens}
        catalogItens={catalogItens}
        setPokemons={setPokemons}
        typePokemon={urlTypePokemon}
        bgColorButton={bgColorButton}
      />
      <Footer bgColor={bgColor} />
    </>
  );
}
export default Store;
