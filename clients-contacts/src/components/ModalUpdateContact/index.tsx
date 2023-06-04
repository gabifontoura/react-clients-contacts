import { useContext } from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/form";
import { StyledModalBg, StyledModalBox } from "../../styles/modal";
import { StyledText } from "../../styles/typography";
import InputField from "../InputField";
import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { Contact } from "../../pages/Dashboard";

export const ModalUpdateContact = () => {
  const {
    setIsModalUpdateContactVisible,
    globalLoading,
    updateContact,
    contact,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Contact>();

  const submit = (data: Contact) => {
    if (data && contact) {
      updateContact(data, contact);
      reset();
    }
  };

  return (
    <StyledModalBg>
      <StyledModalBox>
        <div className="modal-header">
          <StyledText tag="h3" fontSize="one">
            Update Contact
          </StyledText>
          <StyledButton
            buttonStyle="edit"
            buttonSize="edit"
            onClick={() => setIsModalUpdateContactVisible(false)}
          >
            <CgClose />
          </StyledButton>
        </div>

        <StyledForm onSubmit={handleSubmit(submit)}>
          <InputField
            type="text"
            id="name"
            placeholder={
              contact?.name !== "" ? contact?.name : "Type your full name"
            }
            register={register("name")}
            disabled={globalLoading}
          />
          {errors.name?.message && (
            <StyledText tag="p" fontSize="warnText">
              {errors.name.message}
            </StyledText>
          )}

          <InputField
            type="email"
            id="email"
            placeholder={
              contact?.email !== "" ? contact?.email : "Type your email"
            }
            register={register("email")}
            disabled={globalLoading}
          />
          {errors.email?.message && (
            <StyledText tag="p" fontSize="warnText">
              {errors.email.message}
            </StyledText>
          )}

          <InputField
            type="telephone"
            id="telephone"
            placeholder={
              contact?.telephone !== ""
                ? contact?.telephone
                : "Type your telephone"
            }
            register={register("telephone")}
            disabled={globalLoading}
          />
          {errors.telephone?.message && (
            <StyledText tag="p" fontSize="warnText">
              {errors.telephone.message}
            </StyledText>
          )}

          <StyledButton
            buttonStyle="primary"
            buttonSize="default"
            type="submit"
          >
            Save
          </StyledButton>
        </StyledForm>
      </StyledModalBox>
    </StyledModalBg>
  );
};
