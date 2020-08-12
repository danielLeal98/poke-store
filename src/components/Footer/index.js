import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import api from '../../repositories/api';

function Footer({ bgColor }) {
  return (
    <FooterBase bgColor={bgColor}>
      <Link to="/">
        <img
          className="Logo"
          src={Logo}
          alt="PokeStore"
          onClick={api.clearCache}
        />
      </Link>
    </FooterBase>
  );
}

export default Footer;
