import { Todo } from "../../types";
import { Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { memo } from "react";

type DraggableTaskProps = {
  task: Todo;
  index: number;
};

const DraggableTask = memo(({ task, index }: DraggableTaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index} key={task.id}>
      {(provided) => (
        <div className="py-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Task task={task}/>
        </div>
      )}
    </Draggable>
  );
});

export default DraggableTask;
