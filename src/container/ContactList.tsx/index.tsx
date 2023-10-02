import { useSelector } from "react-redux";
import { Contact } from "../../components/Contact";
import { RoodReducer } from "../../store";

import * as S from "./styles";
import { Container } from "../../styles";

const ContactList = () => {
  const { items } = useSelector((state: RoodReducer) => state.contacts);

  return (
    <Container>
      <S.CardContainer>
        {items.map((item) => (
          <Contact
            key={item.id}
            fullname={item.fullname}
            email={item.email}
            phone={item.phone}
            id={item.id}
          />
        ))}
      </S.CardContainer>
    </Container>
  );
};

export default ContactList;
