

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodo } from './CreateTodo';
import "./TodoCounter.css"

function App() {
  const defaultArray = [
    {text: "tarea 1", completed: false},
    {text: "Nueva traea", completed: false},
    {text: "en progreso1", completed: true},
    {text: "enproducción", completed: true},
  ]
  return (
    <div className='row todo_container '>
       <div className='col-sm-6 d-flex justify-content-center align-items-center'>
   <CreateTodo />
   </div>
      <section className=' col-sm-6 d-flex justify-content-center align-items-center'>
        <div>
        <TodoCounter completed={16} total={25} />
        <article className='pb-2 d-flex justify-content-center'>
        <TodoSearch />
        </article>
        <TodoList> 
          {defaultArray.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        
          
        </TodoList>
        </div>
      </section>
  
     </div>
  );
}

export default App;
