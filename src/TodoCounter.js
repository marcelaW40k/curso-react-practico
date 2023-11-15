import "./TodoCounter.css"

function TodoCounter({total, completed}) {

    return (
        <section>
            <h1 className="text-center title-task">
            Your tasks
        </h1>
        <h3 className="text-center"> Completed <strong>{completed}</strong> to <strong>{total}</strong> TODO </h3>
        </section>
    );
}

export { TodoCounter };