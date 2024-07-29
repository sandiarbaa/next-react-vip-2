import React from "react";
import Button from "../Elements/Button";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-gray-800 p-3 text-white font-bold absolute top-0 left-0 flex justify-between">
      <h1>Navbar</h1>
      <Button>Logout</Button>
    </div>
  );
};

export default Navbar;
