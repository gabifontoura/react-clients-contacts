import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledModalBg, StyledModalBox } from "../../styles/modal";
import { CgClose } from "react-icons/cg";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typography";
import { api } from "../../services/api";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Contact } from "../../pages/Dashboard";
import { ContactsCardModal } from "./ContactCardModal";
import { ContactsList } from "./styles";

export const ModalViewContactDetail = () => {
  const { setIsModalViewContactVisible, contact } = useContext(UserContext);
  const [extraContacts, setExtraContacts] = useState<Contact[]>([]);
  useEffect(() => {
    (async () => {
      if (contact) {
        const response = await api.get(`/users/${contact.id}`);
        setExtraContacts(response.data.contacts);
      }
    })();
  }, []);

  return (
    <StyledModalBg>
      <StyledModalBox>
        <div className="modal-header">
          <StyledText tag="h3" fontSize="one">
            View Contact Detail
          </StyledText>
          <StyledButton
            buttonStyle="edit"
            buttonSize="edit"
            onClick={() => setIsModalViewContactVisible(false)}
          >
            <CgClose />
          </StyledButton>
        </div>

        <StyledText tag="h2" fontSize="two">
          {contact?.name}
        </StyledText>

        <div className="icon">
          <MdOutlineEmail />
          <StyledText tag="p" fontSize="bodyText">
            {contact?.email}
          </StyledText>
        </div>
        <div className="icon">
          <FiPhoneCall />
          <StyledText tag="p" fontSize="bodyText">
            {contact?.telephone}
          </StyledText>
        </div>
        {extraContacts.length !== 0 ? (
          <ContactsList>
            {extraContacts.map((contact) => (
              <ContactsCardModal key={contact.id} contact={contact} />
            ))}
          </ContactsList>
        ) : (
          <></>
        )}
      </StyledModalBox>
    </StyledModalBg>
  );
};
