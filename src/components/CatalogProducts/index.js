/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import pokebola from '../../../src/assets/pokebola.png';
import api from '../../repositories/api';
import Spinner from '../../components/Spinner';
import { CatalogContainer, ProductsContainerLi, ButtonGet } from './styles';
import notImage from '../../assets/imageDefault.png';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import hookPokemon from '../../hooks/hookPokemon.js';

export default function CatalogProducts({
  setCatalogItens,
  setPokemons,
  setCartItens,
  cartItens,
  typePokemon,
  bgColorButton,
  catalogItens,
  urlTypePokemon,
}) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [infoPokemon, setInfoPokemon] = useState(null);
  const [descriptionPokemon, setDescriptionPokemon] = useState(null);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const arrayPokemons = JSON.parse(localStorage.getItem('pokemons'));
  const imageFallBackPokemon =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  console.log(descriptionPokemon);
  React.useEffect(() => {
    getPoke();
  }, [shoppingCart]);

  const getPoke = async () => {
    setCatalogItens(arrayPokemons);
    setPokemons(arrayPokemons);
    if (!arrayPokemons) {
      setLoading(true);
      api
        .getPokemons(urlTypePokemon)
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
    toast.success('Pokemon adicionado!');
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

  function showModalDetails(pokemon, bgColor) {
    setState({ ...state, right: false });
    api
      .getDetailsPokemon(pokemon.id)
      .then((data) => {
        setInfoPokemon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .getDescriptionPokemon(pokemon.id)
      .then((data) => {
        setDescriptionPokemon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    switch (typePokemon) {
      case 'water':
        bgColor = '#4A90DA';
        break;
      case 'grass':
        bgColor = '#62B957';
        break;
      case 'fire':
        bgColor = '#FD7D24';
        break;
      case 'fighting':
        bgColor = '#D04164';
        break;
      case 'dragon':
        bgColor = '#0F6AC0';
        break;
      case 'psychic':
        bgColor = '#EA5D60';
        break;
      case 'flying':
        bgColor = '#748FC9';
        break;
      case 'ice':
        bgColor = '#61CEC0';
        break;
      case 'ghost':
        bgColor = '#8571BE';
        break;
      case 'rock':
        bgColor = '#BAAB82';
        break;
      case 'poison':
        bgColor = '#A552CC';
        break;
      case 'electric':
        bgColor = '#F2CB55';
        break;
      default:
        bgColor = '#FFFF';
    }

    const backgroundColor =
      'linear-gradient(' + bgColor + ', var(--grey-light)';
    console.log(infoPokemon);
    if (infoPokemon != null) {
      const TextInfo = `<span>${
        descriptionPokemon !== undefined ? descriptionPokemon : '...'
      }</span><br><br><i>Altura: ${
        infoPokemon?.height !== undefined
          ? hookPokemon.formatHeight(infoPokemon?.height)
          : hookPokemon.formatHeight(Math.floor(Math.random() * 100))
      }</i><br><i>Peso: ${
        infoPokemon?.weight !== undefined
          ? hookPokemon.formatWeight(infoPokemon?.weight)
          : hookPokemon.formatWeight(Math.floor(Math.random() * 200))
      } Kg</i><br>`;

      Swal.fire({
        timer: 5000,
        title: hookPokemon.formatName(pokemon.name),
        html: infoPokemon ? TextInfo : hookPokemon.formatName(pokemon.name),
        imageUrl: `${imageFallBackPokemon}${pokemon.id}.png`,
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: pokemon.name,
        background: backgroundColor,
        animation: true,
        showCloseButton: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
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
              onClick={(e) => showModalDetails(pokemon, bgColorButton)}
            >
              <figure>
                <img
                  src={
                    pokemon.image
                      ? pokemon.image
                      : `${imageFallBackPokemon}${pokemon.id}.png`
                  }
                  onError={(e) => {
                    if (e.target.src !== notImage) {
                      e.target.onerror = null;
                      e.target.src = `${imageFallBackPokemon}${pokemon.id}.png`;
                    }
                  }}
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
