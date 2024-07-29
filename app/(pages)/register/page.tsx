import FormRegister from "@/app/Components/Fragments/FormRegister";
import AuthLayout from "@/app/Components/Layouts/AuthLayout";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <AuthLayout title="Register" type="register">
        <FormRegister />
      </AuthLayout>
    </section>
  );
};

export default RegisterPage;
