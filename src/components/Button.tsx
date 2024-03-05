import { ButtonType } from "../types";

const Button = ({ className, children }: ButtonType) => {
  return (
    <button
      className={`px-4 py-2 text-sm bg-default text-white rounded-3xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
