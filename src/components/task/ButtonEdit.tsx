import clsx from "clsx";

type ButtonEditProps = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isEditing: boolean;
};

const ButtonEdit = ({ className, onClick, isEditing }: ButtonEditProps) => {
  return (
    <button className={clsx("grid h-6 w-6", className)} onClick={onClick}>
      <svg
        className={clsx("place-self-center", {
          "stroke-zinc-500 hover:stroke-violet-600": !isEditing,
          "stroke-violet-500 hover:stroke-violet-700": isEditing,
        })}
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5448 1.84C15.0087 1.37608 15.7608 1.37608 16.2248 1.84L19.1602 4.77539C19.6241 5.23931 19.6241 5.99147 19.1602 6.45538L18.1125 7.50308C17.8805 7.73504 17.5044 7.73504 17.2725 7.50308L13.4971 3.72769C13.2651 3.49573 13.2651 3.11965 13.4971 2.8877L14.5448 1.84Z"
          strokeWidth="1.5"
        />
        <path
          d="M12.237 4.1481C12.7009 3.68418 13.4531 3.68418 13.917 4.1481L16.8524 7.0835C17.3163 7.54741 17.3163 8.29957 16.8524 8.76349L7.77641 17.8395C7.73002 17.8859 7.6548 17.8859 7.60841 17.8395L3.16102 13.3921C3.11463 13.3457 3.11463 13.2705 3.16102 13.2241L12.237 4.1481Z"
          strokeWidth="1.5"
        />
        <path
          d="M3.04343 13.5433C3.05727 13.4464 3.17581 13.4069 3.24503 13.4761L7.52441 17.7555C7.59363 17.8247 7.55412 17.9432 7.45721 17.9571L3.87579 18.4687C3.09179 18.5807 2.41979 17.9087 2.53179 17.1247L3.04343 13.5433Z"
          strokeWidth="1.5"
        />
        <path d="M15 6L5.5 15.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
};

export default ButtonEdit;
