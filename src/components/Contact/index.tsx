import { useState } from "react";
import { useDispatch } from "react-redux";
import { ContactType } from "../../types/Contact";
import { edit, remover } from "../../store/reducers/contact";
import { formatPhoneNumber } from "../../utils/phone";
import * as S from "./styles";
import { Input } from "../../styles";

type Props = ContactType;

export const Contact = ({ fullname, email, phone, id }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedFullname, setEditedFullname] = useState(fullname);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);

  const hadlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedPhone = formatPhoneNumber(e.target.value);

    setEditedPhone(formatedPhone);
  };

  const handleEdit = () => {
    const editedContact = {
      id,
      fullname: editedFullname,
      email: editedEmail,
      phone: editedPhone,
    };

    dispatch(edit(editedContact));
    setIsEditing(false);
  };

  return (
    <S.Card>
      {isEditing ? (
        <>
          <Input
            type="text"
            value={editedFullname}
            onChange={(e) => setEditedFullname(e.target.value)}
          />
          <Input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <Input type="tel" value={editedPhone} onChange={hadlePhoneChange} />
          <S.CardBtn>
            <button style={{ backgroundColor: "#34a02c" }} onClick={handleEdit}>
              Salvar
            </button>
          </S.CardBtn>
        </>
      ) : (
        <>
          <p>Nome: {fullname}</p>
          <p>E-mail: {email}</p>
          <p>Telefone: {phone}</p>
          <S.CardBtn>
            <button
              style={{ backgroundColor: "#faa729" }}
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button
              onClick={() => dispatch(remover(id))}
              style={{ backgroundColor: "#f32f18" }}
            >
              Deletar
            </button>
          </S.CardBtn>
        </>
      )}
    </S.Card>
  );
};
