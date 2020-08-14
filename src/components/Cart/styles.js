import styled from 'styled-components';
export const IconCart = styled.div`
  color: var(--white);
  flex: 1;
  position: fixed;
  top: 80vh;
  @media (max-width: 700px) {
    top: 75vh;
  }
`;
export const ButtonCart = styled.button`
  color: var(--white);
  background-color: transparent;
  border: none;
  position: fixed;
  right: 0;
  background-color: ${(props) => props.bgColorButton};
  width: 70px;
  height: 70px;
  align-items: center;
  border-radius: 50%;
  @media (max-width: 700px) {
  }
`;
export const TitleCart = styled.h2`
  color: ${(props) => props.bgColorButton};
  font-size: 22px;
  padding-left: 60px;
  padding-right: 60px;
`;
export const TextButton = styled.span`
  color: ${(props) => props.bgColorButton};
  font-size: 22px;
  text-align: center;
`;
export const DivTitleCartTop = styled.div`
  width: 100%;
  display: flex;
  text-decoration: none;
  position: fixed;
  top: 0;
  background: ${(props) => props.bgColorButton};
`;
export const DivTotal = styled.div`
  background-color: red;
  display: inline;
`;
export const TitleTotal = styled.span`
  color: black;
  font-size: 16px;
  float: left;
  margin: 10px;
`;
export const ValueTotal = styled.span`
  color: black;
  font-size: 16px;
  float: right;
  font-weight: bold;
  margin: 10px;
`;
export const QtdText = styled.span`
  color: black;
  font-size: 16px;
  float: right;
  font-weight: bold;
  margin: 10px;
`;
export const DivButtonFinalizar = styled.div`
  background-color: red;
  margin: 10px;
  flex-direction: row;
  width: 100%;
`;
export const ButtonFinalizar = styled.button`
  color: black;
  border: white;
  background: ${(props) => props.bgColorButton};
  width: 100%;
  height: 72px;
  font-size: 22px;
  font-weight: bold;
  &:hover {
    filter: saturate(150%);
  }
  outline-style: none;
`;
export const DivTitleCartBottom = styled.div`
  width: inherit;
  position: fixed;
  bottom: 0;
  background-color: grey;
`;
