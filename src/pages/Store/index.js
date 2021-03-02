import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DivHeader from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogProducts from '../../components/CatalogProducts';
import TemporaryDrawer from '../../components/Cart';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from '../../GlobalStyled';

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
      ></DivHeader>
      <TemporaryDrawer
        bgColorButton={bgColorButton}
        cartItens={cartItens}
        setCartItens={setCartItens}
      />
      <CatalogProducts
        setCartItens={setCartItens}
        cartItens={cartItens}
        setCatalogItens={setCatalogItens}
        catalogItens={catalogItens}
        setPokemons={setPokemons}
        urlTypePokemon={urlTypePokemon}
        bgColorButton={bgColorButton}
        typePokemon={typePokemon}
      />
      <GlobalStyled />
      <ToastContainer autoClose={1000} className="toast-container" />
      <Footer bgColor={bgColor} />
    </>
  );
}
export default Store;
