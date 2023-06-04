import { useContext} from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/form";
import { StyledModalBg, StyledModalBox } from "../../styles/modal";
import { StyledText } from "../../styles/typography";
import InputField from "../InputField";
import { UserContext, iUser } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg"
import { Contact } from "../../pages/Dashboard";

export const AddContactModal = () => {
    const { setIsModalAddContactVisible, globalLoading, addContact } = useContext(UserContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<Contact>();
   
    const submit = (data: iUser) => {
        if (data) {
          addContact(data);
          reset();
        }
      }
  
    return (
      <StyledModalBg>
        <StyledModalBox >
          <div className="modal-header">
            <StyledText tag="h3" fontSize="one">Add Contact</StyledText>
            <StyledButton buttonStyle="edit" buttonSize="edit" onClick={() => setIsModalAddContactVisible(false)}>
                <CgClose />
            </StyledButton>
          </div>
  
          <StyledForm onSubmit={handleSubmit(submit)}>
  

        <InputField
                type="text"
                id="name"
                placeholder="Type the contact's full name"
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
                placeholder= "Type an email"
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
                placeholder="Type a telephone"
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
  
