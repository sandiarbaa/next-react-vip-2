import React, { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

interface InputFormProps {
  title: string;
  name: string;
  type: string;
  placeholder: string;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(({
  title,
  name,
  type,
  placeholder,
}, ref) => {
  return (
    <div>
      <Label htmlFor={name} title={title} />
      <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
    </div>
  );
});

InputForm.displayName = "InputForm";

export default InputForm;
