import { MdOutlineEmail, MdOutlineModeEditOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import {TiDelete} from "react-icons/ti"
import { Contact } from "../../pages/Dashboard";
import { StyledText } from "../../styles/typography";
import { StyledCard } from "./styles";
import { StyledButton } from "../../styles/buttons";


interface CardProps {
    contact: Contact;
  }
  
  export const Card = ({ contact }: CardProps) => {
  
    return (
      <StyledCard>
        <div className="edit">
            <StyledButton buttonSize="small" buttonStyle="edit"  title="Edit">
                <MdOutlineModeEditOutline />
            </StyledButton>
            <StyledButton buttonSize="small" buttonStyle="edit"  title="Delete">
               <TiDelete />
            </StyledButton>
        </div>
            <StyledText tag="p" fontSize="bodyText">{contact.name}</StyledText>
        
        <div className="line">
            <MdOutlineEmail />
            <StyledText tag="p" fontSize="bodyText">{contact.email}</StyledText>
        </div>
        <div className="line">
            <FiPhoneCall/>
            <StyledText tag="p" fontSize="bodyText">{contact.telephone}</StyledText>
        </div>
      </StyledCard>
    );
  };