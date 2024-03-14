import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TodosState = {
  tasks: Todo[],
}

const initialState: TodosState = {
  tasks: [
    {
      id: "default-todo-0000",
      text: "Solve a problem of day leetCode",
      isDone: false,
    }
  ],
}

export const todosSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Todo>) => {
      state.tasks.push(payload);
    },
    toggleTaskById: (state, { payload }: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === payload);
      if (index !== -1) {
        state.tasks[index].isDone = !state.tasks[index].isDone;
      }
    },
    removeTaskById: (state, { payload }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    }
  },
})

export const { addTask, toggleTaskById, removeTaskById } = todosSlice.actions

export default todosSlice;