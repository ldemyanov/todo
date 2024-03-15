import { forwardRef } from "react";

type InputProps = {
  onEnter: () => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ onEnter }, ref) => {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onEnter();
  };

  return (
    <input
      ref={ref}
      defaultValue="123"
      type="text"
      className="bg-slate-800 border-2 border-slate-950 text-gray-200 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 focus:outline-none"
      placeholder="input new important deal"
      required
      onKeyDown={handleKeyDown}
    />
  );
});

export default Input;
