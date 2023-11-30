function TodosLoading() {
    
    return (
        <>
        <div className={`card loading-task mb-2 `}>
            <div className="card-body loadingItem">
                <span className="Icon loading-check" >
                </span>
                <p className={`LoadingTodo-text`}></p>
                <span className="Icon loading-delete"> </span>
            </div>
        </div>
    
        </>
    );
}

export { TodosLoading };