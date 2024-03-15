import clsx from "clsx";

type CheckboxProps = {
  className?: string;
  handleCheckbox: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
  taskId: string;
};

const Checkbox = ({ className, handleCheckbox, isChecked, taskId }: CheckboxProps) => (
  <div className={clsx("flex", className)}>
    <input
      type="checkbox"
      id={taskId}
      checked={isChecked}
      onChange={handleCheckbox}
      className="hidden peer todo-checkbox"
      required
    />
    <label
      htmlFor={taskId}
      className="grid w-6 h-6 rounded-full cursor-pointer border border-violet-500 hover:border-violet-600 peer-checked:border-0 peer-checked:bg-violet-700 peer-checked:hover:bg-violet-600"
    >
      {isChecked && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="place-self-center fill-violet-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.9904 8.6181L11.034 14.5745L7.62056 11.1611L6.47119 12.3105L11.034 16.8733L18.1397 9.76747L16.9904 8.6181Z" />
        </svg>
      )}
    </label>
  </div>
);

export default Checkbox;
