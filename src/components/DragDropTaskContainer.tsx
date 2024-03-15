import { DragDropContext, Droppable, OnDragEndResponder } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setTasksOrder } from "../store/todoSlice";
import DraggableTask from "./task/DraggableTask";

const DragDropTaskContainer = () => {
  const { tasks, tasksOrder, filter } = useAppSelector((state) => state.todoList);

  console.log(tasksOrder);

  const dispatch = useAppDispatch();

  const handleDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination || destination.index === source.index) {
      return;
    }

    const newTaskOrders = tasksOrder[filter].slice();
    newTaskOrders.splice(source.index, 1);
    newTaskOrders.splice(destination.index, 0, draggableId);

    dispatch(setTasksOrder(newTaskOrders));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="taskDroppobleZone">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasksOrder[filter].map((taskId, index) => {
              const task = tasks[taskId];
              if (task) {
                return <DraggableTask index={index} key={taskId} task={task} />;
              }
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropTaskContainer;
