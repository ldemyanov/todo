type InputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ onChange, value }: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="bg-slate-800 border-2 border-slate-950 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="input new important deal"
      required
    />
  );
};

export default Input;
