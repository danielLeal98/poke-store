/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import pokebola from '../../../src/assets/pokebola.png';
import api from '../../repositories/api';
import Spinner from '../../components/Spinner';
import { CatalogContainer, ProductsContainerLi, ButtonGet } from './styles';

export default function CatalogProducts({
  setCatalogItens,
  setPokemons,
  setCartItens,
  cartItens,
  typePokemon,
  bgColorButton,
  catalogItens,
}) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const ArrayPokemons = JSON.parse(localStorage.getItem('pokemons'));

  React.useEffect(() => {
    getPoke();
  }, [shoppingCart]);

  const getPoke = async () => {
    setCatalogItens(ArrayPokemons);
    setPokemons(ArrayPokemons);
    if (!ArrayPokemons) {
      setLoading(true);
      api
        .getPokemons(typePokemon)
        .then((pokemon) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setLoading(false);
    }
  };

  async function addProduct(obj) {
    const duplicated = cartItens.findIndex(
      (element) => element.name === obj.name
    );

    if (duplicated === -1) {
      setShoppingCart([...shoppingCart, obj]);
      setCartItens([...cartItens, obj]);
    } else {
      const items = cartItens.map((element) => {
        if (obj.name === element.name) {
          const updatePokemon = {
            name: element.name,
            image: element.image,
            quantity: element.quantity + 1,
            price: element.price,
          };
          return updatePokemon;
        }
        return element;
      });

      setCartItens(items);
    }
  }
  return (
    <CatalogContainer>
      <div className="catalog">
        {isLoading ? (
          <Spinner bgColorButton={bgColorButton}></Spinner>
        ) : (
          catalogItens.map((pokemon) => (
            <ProductsContainerLi
              key={`${pokemon.name}-${pokemon.quantity}-${pokemon.price}`}
            >
              <figure>
                <img
                  src={pokemon.image}
                  className="imagePokemon"
                  alt={pokemon.name}
                />
              </figure>
              <p className="products-container-ul-li-p">
                {pokemon.name}
                <strong className="products-container-ul-li-strong">
                  {Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(pokemon.price)}
                </strong>
              </p>
              <ButtonGet
                bgColorButton={bgColorButton}
                onClick={() => addProduct(pokemon)}
              >
                <span className="textAddProduct">Capturar</span>
                <img src={pokebola} className="pokebola" alt="pokebola" />
              </ButtonGet>
            </ProductsContainerLi>
          ))
        )}
      </div>
      <a className="cartScroll" href="#pokebola">
        <FiShoppingCart className="iconCartBottom" size={30} color="white" />
      </a>
    </CatalogContainer>
  );
}
