import React, { useState } from "react";

function CreateTodo({ addTodo }) {
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    addTodo(newTodoValue);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <div className="card add-task ">
      <div className="card-body p-5">
        <h1 className="text-center title-create">Create new task</h1>
        <form onSubmit={onSubmit}>
          <div className="pt-3 pb-3">
            <label className="form-label">
              <strong>Task name</strong>
            </label>
            <input
              placeholder="task"
              className="form-control add-input"
              value={newTodoValue}
              onChange={onChange}
            />
          </div>
          <div className="pt-2 ">
            <button type="submit" className="btn btn-primary btn-lg boton-add">
              Create task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { CreateTodo };
