import { useState } from "react";
import useLocalStorge from "./useLocalStorage";

function useTodos() {
  const {
    item: arrayTodos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorge("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = arrayTodos.filter((todo) => !!todo.completed).length;
  const totalTodos = arrayTodos.length;

  const searchedTodos = arrayTodos.filter((todo) => {
    const noTildes = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    const TodoTextLC = noTildes(todo.text.toLowerCase());
    const searchTextLC = noTildes(searchValue.toLowerCase());
    return TodoTextLC.includes(searchTextLC);
  });

  const completeTodo = (text) => {
    const newTodos = [...arrayTodos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...arrayTodos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...arrayTodos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  return {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    addTodo,
  };
}

export { useTodos };
