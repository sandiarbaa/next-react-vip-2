import React from "react";

const Label: React.FC<{ htmlFor: string; title: string }> = ({
  htmlFor,
  title,
}) => {
  return (
    <label htmlFor={htmlFor} className="block font-semibold text-sm mb-2">
      {title}
    </label>
  );
};

export default Label;
