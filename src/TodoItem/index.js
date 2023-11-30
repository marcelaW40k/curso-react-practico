import { FaCircleCheck, FaCircleNotch  } from "react-icons/fa6";

function TodoItem(props) {
    return (
        <>
        <div className={`card list-task mb-2 ${props.completed && "card-check--active"}`}>
            <div className="card-body TodoItem">
                <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onCompleted}>
               {props.completed ?  <FaCircleCheck /> : <FaCircleNotch />}
                </span>
                <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text} </p>
                <span className="Icon Icon-delete" onClick={props.onDelete}> <i className="fa-solid fa-trash"></i></span>
            </div>
        </div>
    
        </>
    );
}

export { TodoItem };