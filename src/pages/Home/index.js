import React from 'react';
import { Link } from 'react-router-dom';

import pokeGrass from '../../assets/pokeGrass.png';
import pokeWater from '../../assets/pokeWater.png';
import pokePsychic from '../../assets/pokePsychic.png';
import pokeFire from '../../assets/pokeFire.png';
import pokeRock from '../../assets/pokeRock.png';
import pokeGhost from '../../assets/pokeGhost.png';
import pokeIce from '../../assets/pokeIce.png';
import pokeDragon from '../../assets/pokeDragon.png';
import pokeElectric from '../../assets/pokeEletric.png';
import pokeFlying from '../../assets/pokeFlying.png';
import pokeFighting from '../../assets/pokeFighting.png';
import pokePoison from '../../assets/pokePoison.png';

import logoImg from '../../assets/logo.png';
import grassImg from '../../assets/Grass.png';
import psychicImg from '../../assets/Psychic.png';
import waterImg from '../../assets/Water.png';
import fireImg from '../../assets/Fire.png';
import rockImg from '../../assets/Rock.png';
import ghostImg from '../../assets/Ghost.png';
import iceImg from '../../assets/Ice.png';
import dragonImg from '../../assets/Dragon.png';
import electricImg from '../../assets/Electric.png';
import flyingImg from '../../assets/Flying.png';
import fightingImg from '../../assets/Fighting.png';
import poisonImg from '../../assets/Poison.png';

import { Container, TypeContainer, Cards, DivLogoHeader } from './styles';

function Home() {
  return (
    <Container>
      <DivLogoHeader>
        <img src={logoImg} alt="Logo PokeStore" />
      </DivLogoHeader>
      <Cards>
        <Link to="/grass">
          <TypeContainer bgcolor="var(--grass)" borderColor="var(--grass)">
            <img src={pokeGrass} alt="logo" />
            <img src={grassImg} alt="Grass" />
          </TypeContainer>
        </Link>

        <Link to="/psychic">
          <TypeContainer bgcolor="var(--psychic)" borderColor="var(--psychic)">
            <img src={pokePsychic} alt="logo" />
            <img src={psychicImg} alt="Psychic" />
          </TypeContainer>
        </Link>

        <Link to="/water">
          <TypeContainer bgcolor="var(--water)" borderColor="var(--water)">
            <img src={pokeWater} alt="logo" />
            <img src={waterImg} alt="Water" />
          </TypeContainer>
        </Link>
        <Link to="/fire">
          <TypeContainer bgcolor="var(--fire)" borderColor="var(--fire)">
            <img src={pokeFire} alt="logo" />
            <img src={fireImg} alt="Fire" />
          </TypeContainer>
        </Link>
        <Link to="/rock">
          <TypeContainer bgcolor="var(--rock)" borderColor="var(--rock)">
            <img src={pokeRock} alt="logo" />
            <img src={rockImg} alt="Rock" />
          </TypeContainer>
        </Link>
        <Link to="/ghost">
          <TypeContainer bgcolor="var(--ghost)" borderColor="var(--ghost)">
            <img src={pokeGhost} alt="logo" />
            <img src={ghostImg} alt="Ghost" />
          </TypeContainer>
        </Link>
        <Link to="/ice">
          <TypeContainer bgcolor="var(--ice)" borderColor="var(--ice)">
            <img src={pokeIce} alt="logo" />
            <img src={iceImg} alt="Ice" />
          </TypeContainer>
        </Link>
        <Link to="/dragon">
          <TypeContainer bgcolor="var(--dragon)" borderColor="var(--dragon)">
            <img src={pokeDragon} alt="logo" />
            <img src={dragonImg} alt="Dragon" />
          </TypeContainer>
        </Link>
        <Link to="/electric">
          <TypeContainer
            bgcolor="var(--electric)"
            borderColor="var(--electric)"
          >
            <img src={pokeElectric} alt="logo" />
            <img src={electricImg} alt="Eletric" />
          </TypeContainer>
        </Link>
        <Link to="/flying">
          <TypeContainer bgcolor="var(--flying)" borderColor="var(--flying)">
            <img src={pokeFlying} alt="logo" />
            <img src={flyingImg} alt="Flying" />
          </TypeContainer>
        </Link>
        <Link to="/fighting">
          <TypeContainer
            bgcolor="var(--fighting)"
            borderColor="var(--fighting)"
          >
            <img src={pokeFighting} alt="logo" />
            <img src={fightingImg} alt="Fighting" />
          </TypeContainer>
        </Link>
        <Link to="/poison">
          <TypeContainer bgcolor="var(--poison)" borderColor="var(--poison)">
            <img src={pokePoison} alt="logo" />
            <img src={poisonImg} alt="Poison" />
          </TypeContainer>
        </Link>
      </Cards>
    </Container>
  );
}
export default Home;
