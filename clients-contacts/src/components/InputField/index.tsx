import React, { InputHTMLAttributes } from "react";

import { StyledFieldset, StyledInput } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";


interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: string;
    register?: UseFormRegisterReturn;
    placeholder: string;
    disabled?:boolean;
    onChange?: ( React.ChangeEventHandler<HTMLInputElement> | undefined);
    className?: string;
}

const InputField = ({ id, type, register, placeholder, disabled, onChange, className }: iInputProps ) => {
  return (
    <StyledFieldset className={className}>
      <StyledInput 
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        onChange={onChange}
        
      />
    </StyledFieldset>
  );
};

export default InputField;