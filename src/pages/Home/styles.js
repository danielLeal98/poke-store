import styled from 'styled-components';

export const Container = styled.div`
  background: url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
  background-repeat: repeat-x;
  top: 0;
  left: 0;  
  min-width: 100%;
  min-height: 100%;
	margin: 0;
	padding: 0;
`;

export const DivLogoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TypeContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
  min-width: 220px;
  max-width: 220px;
  text-decoration: none;

  border-color: ${(props) => props.borderColor};

  background: ${(props) => props.bgcolor};

  img {
    height: 150px;
    margin: 10px;
    text-decoration: none;
  }

  h1 {
    text-decoration: none;
  }

  img:nth-of-type(2) {
    text-decoration: none;
    height: 50px;
  }
`;
