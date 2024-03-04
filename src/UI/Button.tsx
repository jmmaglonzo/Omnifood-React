import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: string;
}

function Button({ children, color }: ButtonProps) {
  return (
    <button
      className={`rounded-md px-6 py-2 font-semibold capitalize shadow-lg ${color} `}
    >
      {children}
    </button>
  );
}

export default Button;
