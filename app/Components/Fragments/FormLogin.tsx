"use client";
import React, { useEffect, useRef } from "react";
import InputForm from "../ELements/InputForm";
import Button from "../ELements/Button";
import { useRouter } from "next/navigation";

const FormLogin: React.FC = () => {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    console.log(email);
    console.log(password);

    router.push("/products");
  };

  const emailRef= useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    emailRef.current?.focus()
  }, [])
  
  return (
    <form onSubmit={handleLogin}>
      <div className="mb-5">
        <InputForm
          title="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          ref={emailRef}
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
      <Button type="submit" classname="w-full bg-black">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
