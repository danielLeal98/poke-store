import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1001px) {
    height: auto;
  }
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
