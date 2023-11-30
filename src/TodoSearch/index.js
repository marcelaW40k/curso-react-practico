import { useContext } from "react";
import { TodoContext } from "../App/TodoContext";


function TodoSearch() {
    const { searchValue, setSearchValue,} = useContext(TodoContext)
    return (
        <section >
            <input placeholder="search..." className="form-control TodoSearch" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        </section>
    );
}

export { TodoSearch };