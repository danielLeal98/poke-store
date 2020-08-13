import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import {
  IconCart,
  ButtonCart,
  DivTitleCartTop,
  DivTitleCartBottom,
  TitleCart,
  ValueTotal,
  TitleTotal,
  DivTotal,
  ButtonFinalizar,
  QtdText,
} from './styles';
import './cart.css';
import notImage from '../../assets/imageDefault.png';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 0, 2),
  },
  list: {
    width: 370,
    paddingTop: 30,
    paddingBottom: 112,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function TemporaryDrawer({
  bgColorButton,
  cartItens,
  setCartItens,
}) {
  const cor = bgColorButton;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const totalShoppingCart = JSON.parse(
    localStorage.getItem('totalShoppingCart')
  );
  const arrayShoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  const items = arrayShoppingCart.map((pokemon) => {
    return pokemon.quantity;
  });

  const totalItens = items.reduce((sum, quantity) => sum + quantity, 0);

  async function addProduct(obj) {
    //Pokemon já existe no carrinho - adiciona mais uma quantidade no pokemon
    const items = cartItens.map((pokemon) => {
      toast.success('Pokémon adicionado!');
      if (obj.name === pokemon.name) {
        const updatePokemon = {
          name: pokemon.name,
          image: pokemon.image,
          quantity: pokemon.quantity + 1,
          price: pokemon.price,
        };
        return updatePokemon;
      }
      return pokemon;
    });
    setCartItens(items);
  }

  async function removeProduct(obj) {
    toast.error('Pokémon removido!');
    const items = cartItens.map((pokemon) => {
      if (obj.name === pokemon.name) {
        const updatePokemon = {
          name: pokemon.name,
          image: pokemon.image,
          quantity: pokemon.quantity - 1,
          price: pokemon.price,
        };
        if (updatePokemon.quantity > 0) {
          return updatePokemon;
        }
        return null;
      }
      return pokemon;
    });
    const validateItem = items.filter(Boolean);
    setCartItens(validateItem);
  }

  function openModal() {
    if (totalShoppingCart === 0) {
      setState({ ...state, right: false });
      Swal.fire({
        title: 'Oops...',
        text: 'Adicione pelo menos um Pokémon para finalizar a compra!',
        icon: 'error',
        showCancelButton: true,
        cancelButtonText: 'Voltar',
        showConfirmButton: false,
        cancelButtonColor: '#d33',
      });
      return false;
    } else {
      const cashBack = Math.floor(Math.random() * 9 + 1);
      const stringCash = '0.0' + cashBack;
      setState({ ...state, right: false });
      Swal.fire({
        title: 'Obrigado!',
        text:
          'Você ganhou de volta: ' +
          Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(Math.round(Number(stringCash) * totalShoppingCart)) +
          ' (' +
          +cashBack +
          '%)',
        icon: 'success',
        showCloseButton: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.close) {
          localStorage.clear();
          window.location.href = window.location.origin;
        }
      });
    }
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      {false ? (
        <List
          component="nav"
          className={classes.root}
          aria-label="contacts"
        ></List>
      ) : (
        cartItens.map((pokemon) => (
          <List style={{ display: 'flex' }}>
            <ListItem
              button
              key={`${pokemon.name}-${pokemon.quantity}-${pokemon.price}`}
            >
              <ListItemIcon>
                <figure>
                  <img
                    src={pokemon.image}
                    onError={(e) => {
                      if (e.target.src !== notImage) {
                        e.target.onerror = null;
                        e.target.src = notImage;
                      }
                    }}
                    className="mini-pokemon"
                    alt="imgPokemon"
                  />
                </figure>
              </ListItemIcon>
              <ListItemText
                primary={
                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                }
                secondary={Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(pokemon.price * pokemon.quantity)}
              />
              <IconButton onClick={() => removeProduct(pokemon)}>
                <RemoveRoundedIcon />
              </IconButton>
              <QtdText>{pokemon.quantity}</QtdText>
              <IconButton onClick={() => addProduct(pokemon)}>
                <AddRoundedIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </List>
        ))
      )}

      <DivTitleCartBottom>
        <DivTitleCartTop bgColorButton={bgColorButton}>
          <TitleCart bgColorButton={'var(--primary)'}>
            Resumo do Carrinho: {totalItens ? totalItens : 0}
          </TitleCart>
          <Divider />
        </DivTitleCartTop>
        <DivTotal>
          <TitleTotal>Valor Total</TitleTotal>
          <ValueTotal>
            {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalShoppingCart)}
          </ValueTotal>
        </DivTotal>
        <DivTotal bgColorButton={bgColorButton}>
          <ButtonFinalizar bgColorButton={bgColorButton} onClick={openModal}>
            <TitleCart bgColorButton={'var(--primary)'}>
              Finalizar Compra
            </TitleCart>
          </ButtonFinalizar>
        </DivTotal>
      </DivTitleCartBottom>
    </div>
  );

  return (
    <IconCart>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonCart
            bgColorButton={bgColorButton}
            onClick={toggleDrawer(anchor, true)}
          >
            <ShoppingCartIcon
              style={{
                color: 'black',
                width: '35px',
                height: '30px',
                margin: 'auto',
                outlineStyle: 'none',
              }}
              className="iconCart"
            />
          </ButtonCart>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </IconCart>
  );
}
