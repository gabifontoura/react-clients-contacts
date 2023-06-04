import { useContext } from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/form";
import { StyledModalBg, StyledModalBox } from "../../styles/modal";
import { StyledText } from "../../styles/typography";
import InputField from "../InputField";
import { UserContext, iUser } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateSchema } from "./schema";

export const UpdateUserModal = () => {
  const { user, setIsModalUpdateVisible, globalLoading, updateUser } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUser>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      telephone: user?.telephone,
    },
  });

  const submit = (data: iUser) => {
    if (data) {
      updateUser(data);
      reset();
    }
  };

  return (
    <StyledModalBg>
      <StyledModalBox>
        <div className="modal-header">
          <StyledText tag="h3" fontSize="one">
            Update Main Info
          </StyledText>
          <StyledButton
            buttonStyle="edit"
            buttonSize="edit"
            onClick={() => setIsModalUpdateVisible(false)}
          >
            <CgClose />
          </StyledButton>
        </div>

        <StyledForm onSubmit={handleSubmit(submit)}>
          <InputField
            type="text"
            id="name"
            placeholder={user?.name !== "" ? user?.name : "Type your full name"}
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
            placeholder={user?.email !== "" ? user?.email : "Type your email"}
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
              user?.telephone !== "" ? user?.telephone : "Type your telephone"
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
