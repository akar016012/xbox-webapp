import React from "react";

interface Props {
  children: string;
  color?: "primary" | "dark" | "danger";
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "dark" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
