import { MdOutlineEmail, MdOutlineModeEditOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { Contact } from "../../pages/Dashboard";
import { StyledText } from "../../styles/typography";
import { StyledCard } from "./styles";
import { StyledButton } from "../../styles/buttons";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

interface CardProps {
  contact: Contact;
}

export const Card = ({ contact }: CardProps) => {
  const { deleteContact, setIsModalUpdateContactVisible, setContact } =
    useContext(UserContext);
  return (
    <StyledCard>
      <div className="edit">
        <StyledButton
          buttonSize="small"
          buttonStyle="edit"
          title="Edit"
          onClick={() => {
            setIsModalUpdateContactVisible(true), setContact(contact);
          }}
        >
          <MdOutlineModeEditOutline />
        </StyledButton>
        <StyledButton
          buttonSize="small"
          buttonStyle="edit"
          title="Delete"
          onClick={() => deleteContact(contact.id)}
        >
          <TiDelete />
        </StyledButton>
      </div>
      <StyledText tag="p" fontSize="bodyText">
        {contact.name}
      </StyledText>

      <div className="line">
        <MdOutlineEmail />
        <StyledText tag="p" fontSize="bodyText">
          {contact.email}
        </StyledText>
      </div>
      <div className="line">
        <FiPhoneCall />
        <StyledText tag="p" fontSize="bodyText">
          {contact.telephone}
        </StyledText>
      </div>
    </StyledCard>
  );
};
