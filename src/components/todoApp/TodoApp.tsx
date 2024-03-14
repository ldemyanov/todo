import TaskContainer from "./TaskContainer";
import TodosCreator from "./TodosCreator";

const TodoApp = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <TodosCreator />
      <TaskContainer />
    </div>
  );
};

export default TodoApp;
