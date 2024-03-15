import { memo, useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { Todo } from "../../types";
import ButtonDelete from "./ButtonDelete";
import Checkbox from "./Checkbox";
import { removeTaskById, toggleTaskById } from "../../store/todoSlice";

type TaskProps = {
  task: Todo;
};

const Task = memo(({ task }: TaskProps) => {
  const dispatch = useAppDispatch();

  const handleCheckbox = useCallback(() => {
    dispatch(toggleTaskById(task.id));
  }, [task.id, dispatch]);

  const handleDeleteTask = useCallback(() => {
    dispatch(removeTaskById(task.id));
  }, [task.id, dispatch]);

  return (
    <div className="bg-slate-950 rounded-lg min-h-16 w-full px-4">
      <div className="flex flex-nowrap gap-3">
        <Checkbox className="mt-4" isChecked={task.isDone} handleCheckbox={handleCheckbox} taskId={task.id} />
        <div className="grow text-gray-300 mt-3 pb-3">{task.text}</div>
        <ButtonDelete className="mt-4" onClick={handleDeleteTask} />
      </div>
    </div>
  );
});

export default Task;
