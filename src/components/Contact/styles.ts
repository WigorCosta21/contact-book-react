import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  border: 2px solid #34a02c;
  border-radius: 8px;
  padding: 1rem;

  input {
    width: 100%;
  }
`;

export const CardBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 8px;

  button {
    width: 100px;
    display: flex;
    justify-content: center;
    padding: 0.225rem 0.5rem;
    border-radius: 8px;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;
