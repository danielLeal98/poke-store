import styled from 'styled-components';

export const CatalogContainer = styled.div`
  color: var(--white);
  flex: 1;
  padding-top: 100px;
  padding-bottom: 5%;
  text-align: center;

  @media (max-width: 1024px) {
    padding-top: 150px;
    padding-bottom: 15%;
  }
`;

export const ButtonGet = styled.button`
  border: 0;
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.bgColorButton};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  margin: auto;
  color: white;
  &:hover {
    filter: saturate(150%);
  }
`;

export const ProductsContainerLi = styled.div`
  display: inline-block;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: auto;
  background-color: #f2f2f2;

  @media (max-width: 500px) {
    margin: 10px;
  }

  figure:hover img {
    -webkit-transform: scale(1.2);
  }

  .imagePokemon {
    width: 90px;
    height: 90px;
  }
  .pokebola {
    width: 25px;
    height: 25px;
  }

  .products-container-ul {
    list-style: none;
    background-color: transparent;
  }

  .products-container-ul-li-strong {
    display: flex;
    text-align: center;
    justify-content: center;
    color: black;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .products-container-ul-li-p:first-letter {
    text-transform: capitalize;
  }

  .textAddProduct {
    text-align: center;
    display: flex !important;
    justify-content: center;
    color: white;
    font-size: 15px;
    font-weight: bold;
  }
`;
