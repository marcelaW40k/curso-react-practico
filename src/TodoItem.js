function TodoItem(props) {
    return (
        <>
        <div class={`card list-task mb-2 ${props.completed && "card-check--active"}`}>
            <div class="card-body TodoItem">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
            <i className="fa-solid fa-check"></i>
        </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text} </p>
            <span className="Icon Icon-delete"> <i className="fa-solid fa-trash"></i></span>
               
            </div>
        </div>
    
        </>
    );
}

export { TodoItem };