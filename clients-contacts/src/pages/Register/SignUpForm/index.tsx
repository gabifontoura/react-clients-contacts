import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../../../styles/buttons";
import { StyledForm } from "../../../styles/form";
import { StyledText } from "../../../styles/typography";
import InputField from "../../../components/InputField";
import { registerSchema } from "./signUpSchema";
import { UserContext } from "../../../providers/UserContext";
import { NavLink } from "react-router-dom";
import { StyledFlexBox } from "../styles";

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();

  const { globalLoading, userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      telephone: "",
    },
  });

  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    reset();
    userRegister(data);
    navigate("/");
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(submit)}>
      <StyledFlexBox>

        <StyledText tag="h2" fontSize="two" >
          Create new Account
        </StyledText>
        <NavLink to="/" className="main-nav-active">
          Back
        </NavLink>
      </StyledFlexBox>
   

      <InputField
        type="text"
        id="name"
        placeholder="Type your full name"
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
        placeholder="Type your email"
        register={register("email")}
        disabled={globalLoading}
      />
      {errors.email?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.email.message}
        </StyledText>
      )}

      <InputField
        type="password"
        id="password"
        placeholder="Type your password"
        register={register("password")}
        disabled={globalLoading}
      />
      {errors.password?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.password.message}
        </StyledText>
      )}

      <InputField
        type="telephone"
        id="telephone"
        placeholder="Type your phone"
        register={register("telephone")}
        disabled={globalLoading}
      />
      {errors.telephone?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.telephone.message}
        </StyledText>
      )}

      <StyledButton
        type="submit"
        buttonSize="default"
        buttonStyle="primary"
        disabled={globalLoading}
      >
        {globalLoading ? "Loading..." : "Sign Up"}
      </StyledButton>


    </StyledForm>
  );
};

export default SignUpForm;