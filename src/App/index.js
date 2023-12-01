import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import "../TodoCounter.css";
import { CreateTodo } from "../CreateTodo";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

import { TodoHeader } from "../TodoHeader";
import { useTodos } from "./useTodos";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <div className="row todo_container ">
      <div className="col-sm-6 d-flex justify-content-center align-items-center ">
        <CreateTodo addTodo={addTodo} />
      </div>
      <section className=" col-sm-6 d-flex justify-content-center align-items-center">
        <div>
          <TodoHeader>
            <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
            />
            <article className="pb-2 d-flex justify-content-center">
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </article>
          </TodoHeader>
          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            render={(todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          ></TodoList>
        </div>
      </section>
    </div>
  );
}

export default App;
