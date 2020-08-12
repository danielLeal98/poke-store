import styled from 'styled-components';

export const DivHeader = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.bgColor};
  border-bottom: 2px solid var(--primary);
  padding-left: 1.5%;
`;
export const ButtonSearch = styled.button`
  padding: 10px;
  background-color: ${(props) => props.bgColor};
  color: white;
  border-left: 1px solid var(--grass);
  opacity: 0.7;
`;
