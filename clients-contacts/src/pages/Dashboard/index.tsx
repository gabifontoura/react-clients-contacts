import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { api } from "../../services/api";
import { Container, StyledDashboard } from "./styles";
import { StyledText } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import { Card } from "../../components/MyProfileCard";
import {
  ExtraInfoList,
  StyledCard,
} from "../../components/MyProfileCard/styles";
import { FiPhoneCall } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import {
  MdOutlineAdd,
  MdOutlineEmail,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { UpdateUserModal } from "../../components/ModalUpdateUser";
import { ContactList } from "../../components/AllUsersCard/styles";
import { ContactCard } from "../../components/AllUsersCard";
import { AddContactModal } from "../../components/ModalAddContact";
import { ModalUpdateContact } from "../../components/ModalUpdateContact";
import { ModalViewContactDetail } from "../../components/ModalViewContact";

export interface Contact {
  id: number;
  name: string;
  email: string;
  telephone: string;
}

export const Dashboard = () => {
  const {
    user,
    setUser,
    userLogout,
    isModalUpdateVisible,
    setIsModalUpdateVisible,
    deleteUser,
    setIsModalAddContactVisible,
    isModalAddContactVisible,
    setExtraContacts,
    extraContacts,
    isModalUpdateContactVisible,
    isModalViewContactVisible,
  } = useContext(UserContext);

  const userID = localStorage.getItem("@USERid");
  const token = localStorage.getItem("@TOKEN");

  const [allContacts, setAllContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get(`/users/${userID}`);
      setUser(response.data);
      setExtraContacts(response.data.contacts);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get("/users");
      setAllContacts(response.data);
    })();
  }, []);

  return (
    <>
      {user && (
        <StyledDashboard>
          {isModalUpdateVisible && <UpdateUserModal />}
          {isModalAddContactVisible && <AddContactModal />}
          {isModalUpdateContactVisible && <ModalUpdateContact />}
          {isModalViewContactVisible && <ModalViewContactDetail />}

          <Container>
            <header>
              <StyledText tag="h1" fontSize="two">
                Hello, {user.name}
              </StyledText>

              <StyledButton
                buttonSize="medium"
                buttonStyle="secondary"
                onClick={() => userLogout()}
              >
                Exit
              </StyledButton>
            </header>
            <section>
              <div className="users">
                <StyledText tag="h2" fontSize="bodyText">
                  All Contacts
                </StyledText>
                <ContactList>
                  {allContacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                  ))}
                </ContactList>
              </div>

              <div className="profile">
                <StyledText tag="h4" fontSize="three" textAlign="center">
                  My profile
                </StyledText>

                <div className="card">
                  <StyledCard>
                    <div className="edit">
                      <StyledButton
                        buttonSize="small"
                        title="Edit"
                        buttonStyle="edit"
                        onClick={() => setIsModalUpdateVisible(true)}
                      >
                        <MdOutlineModeEditOutline />
                      </StyledButton>
                      <StyledButton
                        buttonSize="small"
                        title="Delete"
                        buttonStyle="edit"
                        onClick={() => deleteUser()}
                      >
                        <TiDelete />
                      </StyledButton>
                    </div>
                    <StyledText tag="p" fontSize="bodyText">
                      {user.name}
                    </StyledText>

                    <div className="line">
                      <MdOutlineEmail />
                      <StyledText tag="p" fontSize="bodyText">
                        {user.email}
                      </StyledText>
                    </div>
                    <div className="line">
                      <FiPhoneCall />
                      <StyledText tag="p" fontSize="bodyText">
                        {user.telephone}
                      </StyledText>
                    </div>
                  </StyledCard>
                </div>
                <div>
                  <div className="add">
                    <StyledText tag="h4" fontSize="three">
                      Extra info:
                    </StyledText>
                    <StyledButton
                      buttonSize="small"
                      buttonStyle="primary"
                      onClick={() => setIsModalAddContactVisible(true)}
                    >
                      <>
                        <MdOutlineAdd />
                        <StyledText tag="h5">Add</StyledText>
                      </>
                    </StyledButton>
                  </div>

                  <ExtraInfoList>
                    {extraContacts &&
                      extraContacts.map((contact) => (
                        <Card key={contact.id} contact={contact} />
                      ))}
                  </ExtraInfoList>
                </div>
              </div>
            </section>
          </Container>
        </StyledDashboard>
      )}
    </>
  );
};
