import styled from 'styled-components';

export const CatalogContainer = styled.div`
  color: var(--white);
  flex: 1;
  padding-top: 5%;
  text-align: center;

  @media (max-width: 700px) {
    padding-top: 20%;
  }
`;

export const ButtonGet = styled.button`
  border: 0;
  width: 100%;
  max-width: 100%;
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
    -webkit-transform: scale(1.3);
  }

  .row-section-catalog {
    background-color: transparent;
    padding: 15px;
    margin: 15px;
    margin-top: 0;
    font-size: 16px;
  }
  .imagePokemon {
    width: 130px;
    height: 130px;
  }

  .products-container-ul {
    list-style: none;
    background-color: transparent;
  }
  .products-container-li {
    display: inline-block;
    border-radius: 8px;
    margin: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: auto;
  }
  .products-container-ul-li-strong {
    display: flex;
    text-align: center;
    justify-content: center;
    color: black;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .products-container-ul-li-p {
    text-align: center;
    align-items: center;
    margin: auto auto 0 auto;
    background-color: transparent;
  }
  .products-container-ul-li-p:first-letter {
    text-transform: capitalize;
  }
  .catalog {
    background-color: transparent;
    margin-top: 10px;
  }
  .buttonCart[href='#top'] {
    padding: 10px;
    position: absolute;
    top: 90%;
    right: 40px;
    display: none;
    font-size: 30px;
  }
  .buttonCart[href='#top']:hover {
    text-decoration: none;
  }
  .cartScroll {
    width: 50px;
    height: 50px;
    background-color: #4fb44e;
    border: 2px solid #4fb44e;
    border-radius: 50%;
    padding-top: 10px;
    padding-left: 10px;
    position: fixed;
    bottom: 12px;
    right: 10px;
  }
  .iconCartBottom {
    padding-right: 29px;
    padding-top: 5px;
    padding-left: 5px;
  }
  .pagination {
    display: flex;
    min-width: 500px;
    max-width: 900px;
    justify-content: space-between;
    margin-top: 10px;
    background-color: yellow;
  }
  .paginationButton {
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin-top: 10px;
    background-color: blue;
    cursor: pointer;
  }
  .paginationItem {
    margin: 20px;
    cursor: pointer;
    text-align: center;
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
