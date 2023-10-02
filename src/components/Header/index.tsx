import { useLocation } from "react-router-dom";
import * as S from "./styles";

export const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  return (
    <S.Header>
      <S.Logo style={{ color: "#" }} to="/">
        Contact List
      </S.Logo>
      {isHome && <S.BtnAdd to="/new-contact">Adicionar</S.BtnAdd>}
    </S.Header>
  );
};
