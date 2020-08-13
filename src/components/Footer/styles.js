import styled from 'styled-components';

export const FooterBase = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.bgColor};

  img {
    margin: 10px;
  }
`;
