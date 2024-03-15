import DragDropTaskContainer from "./DragDropTaskContainer";
import TodosCreator from "./TodosCreator";
import TodosFilter from "./TodosFilter";

const TodoApp = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <TodosCreator />
      <TodosFilter />
      <DragDropTaskContainer />
    </div>
  );
};

export default TodoApp;
