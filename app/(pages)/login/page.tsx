import FormLogin from "@/app/Components/Fragments/FormLogin";
import AuthLayout from "@/app/Components/Layouts/AuthLayout";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <AuthLayout title="Login" type="login">
        <FormLogin />
      </AuthLayout>
    </section>
  );
};

export default LoginPage;
