import clsx from "clsx";
import { forwardRef } from "react";

type TaskContentProps = {
  text: string;
  className?: string;
  isEditing: boolean;
  isDone: boolean;
  onEnter: () => void;
};

const TaskContent = forwardRef<HTMLInputElement, TaskContentProps>(
  ({ text, className, isEditing, onEnter, isDone }, ref) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") onEnter();
    };

    return (
      <input
        ref={ref}
        type="text"
        className={clsx(className, "border-b-2 border-t-2 border-slate-900 text-gray-200 text-sm focus:outline-none", {
          "bg-slate-950": !isEditing,
          "bg-slate-900": isEditing,
          "line-through": isDone,
        })}
        defaultValue={text}
        disabled={!isEditing}
        onKeyDown={handleKeyDown}
      />
    );
  }
);

export default TaskContent;
