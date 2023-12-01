function TodoCounter({ completedTodos, totalTodos }) {
  const message =
    completedTodos >= 1 && totalTodos >= 1 && completedTodos === totalTodos
      ? "!Felicitaciones has completado todos los TODOs!"
      : "";

  return (
    <section>
      <h1 className="text-center title-task">Your tasks</h1>
      <h3 className="text-center">
        {" "}
        {message !== ""
          ? message
          : `Completed ${completedTodos} to ${totalTodos} TODOs`}{" "}
      </h3>
    </section>
  );
}

export { TodoCounter };
