import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginShema";

import InputField from "../../../components/InputField";
import { StyledForm } from "../../../styles/form";
import { StyledText } from "../../../styles/typography";
import { StyledButton } from "../../../styles/buttons";
import { UserContext } from "../../../providers/UserContext";


export interface iLoginFormValues{
    email:string;
    password:string;
}

const LoginForm = () => {

  const { userLogin, globalLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledText tag="h3" >
        Login
      </StyledText>

      <InputField
        type="email"
        id="email"
        placeholder="Type your email"
        register={register("email")}
        disabled={globalLoading}
      />
      {errors.email?.message && (
        <StyledText tag="p" fontSize="warnText" >
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
        <StyledText tag="p" fontSize="warnText" >
          {errors.password.message}
        </StyledText>
      )}

      <StyledButton
        type="submit"
        buttonStyle="primary"
        buttonSize="default"
        disabled={globalLoading}
      >
        {globalLoading ? "Loading..." : "Enter"}
      </StyledButton>

      <StyledText tag="p" fontSize="bodyText" textAlign="center">
        Are you new here?
      </StyledText>

      <NavLink to="/register" className="main-nav-active">
        Sign up
      </NavLink>
    </StyledForm>
  );
};

export default LoginForm;