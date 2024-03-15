type ButtonAddProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonAdd = ({ onClick }: ButtonAddProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-blue-900 hover:bg-blue-950 focus:outline-none font-medium rounded-full border-2 border-slate-950 text-sm px-5 py-2.5 text-center"
    >
      Add
    </button>
  );
};

export default ButtonAdd;
