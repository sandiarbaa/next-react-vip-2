import Link from "next/link";
import { title } from "process";
import React from "react";

const AuthLayout: React.FC<{
  children: React.ReactNode;
  title: string;
  type: string;
}> = ({ children, title, type }) => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="font-bold text-black text-2xl">{title}</h1>
      <p className="text-sm font-semibold text-slate-500 mb-3">
        Welcome, please enter your detail.
      </p>
      {children}
      <Navigation type={type} />
    </div>
  );
};

const Navigation: React.FC<{ type: string }> = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm text-center mt-2 text-slate-500 mb-3">
        Don{"'"}t have an account?{" "}
        <Link href="/register" className="text-black font-bold hover:underline">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm text-center mt-2 text-slate-500 mb-3">
        Already have an account?{" "}
        <Link href="/login" className="text-black font-bold underline">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
