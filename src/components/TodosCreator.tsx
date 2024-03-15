import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { Todo } from "../types";
import { getId } from "../utils/getId";
import { addTask } from "../store/todoSlice";
import ButtonAdd from "./ButtonAdd";
import Input from "./Input";

const TodosCreator = () => {
  const [taskText, setTaskText] = useState("");

  const onChangeTaskText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (taskText) {
      const newTask: Todo = {
        id: getId(taskText),
        text: taskText,
        isDone: false,
      };

      dispatch(addTask(newTask));
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <Input value={taskText} onChange={onChangeTaskText} />
      <ButtonAdd onClick={handleAddTask} />
    </div>
  );
};

export default TodosCreator;
