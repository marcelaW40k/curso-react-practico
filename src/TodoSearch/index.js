function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <section>
      <input
        placeholder="search..."
        className="form-control TodoSearch"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </section>
  );
}

export { TodoSearch };
