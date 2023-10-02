import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #34a02c;
`;

export const BtnAdd = styled(Link)`
  background-color: #34a02c;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
`;
