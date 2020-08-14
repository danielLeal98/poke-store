import styled from 'styled-components';

export const DivHeader = styled.nav`
  background-color: ${(props) => props.bgColor};
  padding: 15px 0;
  text-align: center;
  font-size: calc(var(--font-size) * 1.2);
  border-bottom: 1px solid var(--main-font-color);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;
export const ButtonSearch = styled.button`
  width: 5%;
  height: 50%;
  @media (max-width: 700px) {
    width: auto;
    height: auto;
  }
  background-color: ${(props) => props.bgColor};
  color: white;
  border-left: 1px solid var(--grass);
  opacity: 0.7;
`;
