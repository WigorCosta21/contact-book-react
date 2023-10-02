import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  body{
    background-color: #000;
    color: #FFF;
  }

`;

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100vh;
  padding: 1rem 2rem;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 8px;
  outline: none;
  color: #fff;
  padding: 0.5rem;
  margin-bottom: 8px;
`;

export default GlobalStyle;
