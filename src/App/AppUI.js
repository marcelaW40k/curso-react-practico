import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import "../TodoCounter.css";
import { CreateTodo } from "../CreateTodo";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "./TodoContext";
import { useContext } from "react";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);
  return (
    <div className="row todo_container ">
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <CreateTodo />
      </div>
      <section className=" col-sm-6 d-flex justify-content-center align-items-center">
        <div>
          <TodoCounter />
          <article className="pb-2 d-flex justify-content-center">
            <TodoSearch />
          </article>
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>
      </section>
    </div>
  );
}

export default AppUI;
