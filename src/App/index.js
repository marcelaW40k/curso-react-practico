
import AppUI from './AppUI';
import { TodoProvider } from './TodoContext';

function App() {
 /** const defaultArray = [
    {text: "tarea 1", completed: false},
    {text: "Nueva traea", completed: false},
    {text: "en progreso1", completed: false},
    {text: "en producción", completed: true},
  ] 
  localStorage.setItem('TODOS_V1', JSON.stringify(defaultArray));
  */

  

  return (
  <TodoProvider>
     <AppUI/>
  </TodoProvider>
  );
}

export default App;
