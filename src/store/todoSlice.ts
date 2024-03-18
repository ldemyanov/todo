import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Filter = "All" | "Completed" | "Worked";

export type TodosState = {
  filter: Filter,
  tasksOrder: Record<Filter, string[]>,
  tasks: Record<string, Todo>,
}

const initialState: TodosState = {
  filter: "All",
  tasks: {
    "default-todo-0000": {
      id: "default-todo-0000",
      text: "Solve a problem of day leetCode",
      isDone: false,
    }
  },
  tasksOrder: {
    "All": ["default-todo-0000"],
    "Completed": ["default-todo-0000"],
    "Worked": ["default-todo-0000"]
  }
}

export const todosSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Todo>) => {
      state.tasks[payload.id] = payload;
      Object.keys(state.tasksOrder).map((filterValue) => {
        if (filterValue !== "Completed") {
          state.tasksOrder[filterValue as Filter].push(payload.id);
        }
      });
    },
    toggleTaskById: (state, { payload }: PayloadAction<string>) => {
      state.tasks[payload].isDone = !state.tasks[payload].isDone;
      if (state.tasks[payload].isDone) {
        state.tasksOrder["Completed"].push(payload);
        state.tasksOrder["Worked"] = state.tasksOrder["Worked"].filter((taskId) => taskId !== payload);
      } else {
        state.tasksOrder["Worked"].push(payload);
        state.tasksOrder["Completed"] = state.tasksOrder["Completed"].filter((taskId) => taskId !== payload);
      }
    },
    removeTaskById: (state, { payload }: PayloadAction<string>) => {
      delete state.tasks[payload];
    },
    setTasksOrder: (state, { payload }: PayloadAction<string[]>) => {
      state.tasksOrder[state.filter] = payload;
    },
    setFilterValue: (state, { payload }: PayloadAction<Filter>) => {
      state.filter = payload;
    },
    updateTaskText: (state, { payload }: PayloadAction<{ text: string, id: string }>) => {
      state.tasks[payload.id].text = payload.text;
    }
  },
})

export const { addTask, toggleTaskById, removeTaskById, setTasksOrder, setFilterValue, updateTaskText } = todosSlice.actions

export default todosSlice;