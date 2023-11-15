

function CreateTodo() {
    return (
        <div class="card add-task ">
            <div class="card-body p-5">
                <h1 className="text-center title-create">Create new task</h1>
                <div className="pt-3 pb-3">
                    <label for="inputPassword5" class="form-label"><strong>Task name</strong></label>
                    <input placeholder="task" className="form-control add-input"  />
                </div>
                <div className="pt-2 ">
                <button type="button" className="btn btn-primary btn-lg boton-add" >Create task</button>
                </div>
        
            </div>
        </div>
        
    );
}

export { CreateTodo };