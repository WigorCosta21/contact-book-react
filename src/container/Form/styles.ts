import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 0.5rem 0;
  background-color: #34a02c;
  color: #fff;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.5s;

  &:hover {
    background-color: transparent;
    border-color: #34a02c;
  }
`;
