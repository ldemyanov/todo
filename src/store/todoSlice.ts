import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Filter = "All" | "Completed" | "Worked";

export type TodosState = {
  filter: Filter,
  tasksOrder: string[],
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
  tasksOrder: ["default-todo-0000"],
}

export const todosSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Todo>) => {
      state.tasks[payload.id] = payload;
      state.tasksOrder.push(payload.id);
    },
    toggleTaskById: (state, { payload }: PayloadAction<string>) => {
      state.tasks[payload].isDone = !state.tasks[payload].isDone;
    },
    removeTaskById: (state, { payload }: PayloadAction<string>) => {
      delete state.tasks[payload];
    },
    setTasksOrder: (state, { payload }: PayloadAction<string[]>) => {
      state.tasksOrder = payload;
    },
    setFilterValue: (state, { payload }: PayloadAction<Filter>) => {
      state.filter = payload;

      if (payload === "All") {
        state.tasksOrder = Object.keys(state.tasks);
      } else if (payload === "Completed") {
        state.tasksOrder = Object.values(state.tasks).filter((task) => task.isDone).map((task) => task.id);
      } else if (payload === "Worked") {
        state.tasksOrder = Object.values(state.tasks).filter((task) => !task.isDone).map((task) => task.id);
      }
    }
  },
})

export const { addTask, toggleTaskById, removeTaskById, setTasksOrder, setFilterValue } = todosSlice.actions

export default todosSlice;