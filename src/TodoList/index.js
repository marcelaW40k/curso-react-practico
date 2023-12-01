function TodoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos.length && props.onEmptyTodos()}
      {props.searchedTodos.map((todo) => props.render(todo))}
      <p>{props.children}</p>
    </section>
  );
}

export { TodoList };
