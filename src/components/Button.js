import React from "react";
//depressed
//outlined
//plain
//text

export default function Button({
  form = "primary",
  type = "button",
  styles,
  onClick,
  children,
}) {
  const buttonsForm = {
    primary: "text-white bg-orange-500 hover:bg-orange-600",
    secondary: "text-gray-500 hover:bg-gray-100 border",
    text: "text-orange-500 hover:text-orange-600",
  };

  return (
    <button
      className={`transition rounded-md p-2 ${buttonsForm[form]} ${styles}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
