import { Contact } from "../../pages/Dashboard";
import { StyledText } from "../../styles/typography";
import { StyledContactsCardModal } from "./styles";

interface CardProps {
  contact: Contact;
}
export const ContactsCardModal = ({ contact }: CardProps) => {
  return (
    <StyledContactsCardModal>
      <div className="line">
        <div className="line">
          <StyledText tag="p" fontSize="four">
            {contact.name}
          </StyledText>
        </div>
        <div className="contacts">
          <div className="line">
            <StyledText tag="p" fontSize="three">
              {contact.email}
            </StyledText>
          </div>
          <div className="line">
            <StyledText tag="p" fontSize="three">
              {contact.telephone}
            </StyledText>
          </div>
        </div>
      </div>
    </StyledContactsCardModal>
  );
};
