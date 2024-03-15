import { memo, useCallback, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { Todo } from "../../types";
import ButtonDelete from "./ButtonDelete";
import Checkbox from "./Checkbox";
import { removeTaskById, toggleTaskById, updateTaskText } from "../../store/todoSlice";
import ButtonEdit from "./ButtonEdit";
import TaskContent from "./TaskContent";

type TaskProps = {
  task: Todo;
};

const Task = memo(({ task }: TaskProps) => {
  const contentRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const handleCheckbox = useCallback(() => {
    dispatch(toggleTaskById(task.id));
  }, [task.id, dispatch]);

  const handleDeleteTask = useCallback(() => {
    dispatch(removeTaskById(task.id));
  }, [task.id, dispatch]);

  const handleEditTask = () => {
    const newText = contentRef.current?.value;
    if (newText) {
      dispatch(updateTaskText({ id: task.id, text: newText }));
      setIsEditing((isEditing) => !isEditing);
    }
  };

  return (
    <div className="bg-slate-950 rounded-lg min-h-16 w-full px-4">
      <div className="flex flex-nowrap gap-3">
        <Checkbox className="mt-4" isChecked={task.isDone} handleCheckbox={handleCheckbox} taskId={task.id} />
        <TaskContent
          ref={contentRef}
          text={task.text}
          isDone={task.isDone}
          isEditing={isEditing}
          className="grow mt-3 mb-2 mx-5 p-2"
          onEnter={handleEditTask}
        />
        <ButtonEdit className="mt-4 mr-2" onClick={handleEditTask} isEditing={isEditing} />
        <ButtonDelete className="mt-4" onClick={handleDeleteTask} />
      </div>
    </div>
  );
});

export default Task;
