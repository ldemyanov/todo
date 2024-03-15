import { useRef } from "react";
import { useAppDispatch } from "../hooks/redux";
import { Todo } from "../types";
import { getId } from "../utils/getId";
import { addTask } from "../store/todoSlice";
import ButtonAdd from "./ButtonAdd";
import Input from "./Input";

const TodosCreator = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    const taskText = inputRef.current?.value;

    if (taskText) {
      const newTask: Todo = {
        id: getId(taskText),
        text: taskText,
        isDone: false,
      };

      dispatch(addTask(newTask));

      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <Input ref={inputRef} onEnter={handleAddTask} />
      <ButtonAdd onClick={handleAddTask} />
    </div>
  );
};

export default TodosCreator;
