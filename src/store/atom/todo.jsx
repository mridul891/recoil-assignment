import { atom } from "recoil";

export const TodoCreation = atom({
    key: "TodoCreations",
    default: {}
})

export const RenderTodos = atom({
    key: "RenderTodos",
    default: []
})
export const FilterTodo = atom({
    key: 'FilterTodo',
    default: []
})