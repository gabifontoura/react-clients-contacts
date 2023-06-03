import { Contact } from "../../pages/Dashboard";
import { StyledText } from "../../styles/typography";
import { StyledContactCard } from "./styles";
import { StyledButton } from "../../styles/buttons";


interface CardProps {
    contact: Contact;
  }
  
  export const ContactCard = ({ contact }: CardProps) => {
  
    return (
      <StyledContactCard>
           
        <div className="line">
        <StyledText tag="h3" fontSize="four">{contact.name}</StyledText>
           
            <div className="contacts">
                <div className="line">
                    <StyledText tag="p" fontSize="bodyText">{contact.email}</StyledText>
                </div>
                <StyledButton buttonSize="small" buttonStyle="secondary">
                    <StyledText tag="h6"  fontSize="bodyText">View</StyledText>
                </StyledButton>
            </div>
        </div>
      </StyledContactCard>
    );
  };