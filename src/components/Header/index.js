import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
//import ButtonLink from "./ButtonLink";
import Button from '../Button';
import { HeaderContainer } from './styles';

function Header({ textButton, to }) {
  return (
    <HeaderContainer
      bgcolor={window.location.pathname === '/grass' ? '#78C850' : '#EA477f'}
    >
      <Link to="/">
        <img className="Logo" src={Logo} alt="DMFLIX" />
      </Link>
      <Button as={Link} className="ButtonLink" to={to}>
        {textButton}
      </Button>
    </HeaderContainer>
  );
}

export default Header;
