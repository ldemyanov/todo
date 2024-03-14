import { useAppSelector } from "../../hooks/redux";
import Task from "../task/Task";

const TaskContainer = () => {
  const tasks = useAppSelector((state) => state.todoList.tasks);

  return (
    <div className="flex flex-col gap-4 mt-4">
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskContainer;
