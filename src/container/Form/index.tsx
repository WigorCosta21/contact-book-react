import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../store/reducers/contact";
import { Container, Input } from "../../styles";
import * as S from "./styles";
import { formatPhoneNumber } from "../../utils/phone";

const Form = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hadlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedPhone = formatPhoneNumber(e.target.value);

    setPhone(formatedPhone);
  };

  const handleAddContact = () => {
    const newContact = {
      fullname,
      email,
      phone,
    };

    dispatch(addContact(newContact));

    setFullName("");
    setEmail("");
    setPhone("");
    navigate("/");
  };

  return (
    <Container>
      <S.Title>Adicione um contato</S.Title>
      <S.Form>
        <label htmlFor="fullname">Nome Completo</label>
        <Input
          type="text"
          id="fullname"
          value={fullname}
          onChange={({ target }) => setFullName(target.value)}
        />
        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="phone">Telefone</label>
        <Input
          type="tel"
          id="phone"
          value={phone}
          onChange={hadlePhoneChange}
        />
        <S.Button onClick={handleAddContact}>Adicionar</S.Button>
      </S.Form>
    </Container>
  );
};

export default Form;
