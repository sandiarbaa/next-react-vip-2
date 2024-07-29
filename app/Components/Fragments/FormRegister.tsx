import React from "react";
import InputForm from "../ELements/InputForm";
import Button from "../ELements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <div className="mb-5">
        <InputForm
          title="Fullname"
          name="fullname"
          type="text"
          placeholder="your fullname here"
        />
      </div>
      <div className="mb-5">
        <InputForm
          title="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="mb-5">
        <InputForm
          title="Password"
          name="password"
          type="password"
          placeholder="********"
        />
      </div>
      <div className="mb-5">
        <InputForm
          title="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="********"
        />
      </div>
      <Button classname="w-full bg-black">Register</Button>
    </form>
  );
};

export default FormRegister;
