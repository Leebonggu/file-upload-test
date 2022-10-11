import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
}

function Button({ text, children, disabled }: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        disabled ? 'cursor-not-allowed opacity-70 hover:bg-blue-500' : ''
      }`}
    >
      {children || text}
    </button>
  );
}

export default Button;
