import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './style/style.css'
import { ADDToDoActions, DELETEToDoActions } from './actions/ToDoActions';
function App() {

  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ADDToDoActions(todo));
  }
  const handleDelete = (t) => {
    dispatch(DELETEToDoActions(t));
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
          <h2 className="heading"> To-Do List</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your task" onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="btn mx-auto mt-2 mb-2 round-button">ADD</button>
          </form>
        </div>
        <div className='mt-4'>
          <ul className="all-tasks">
            {
              todos && todos.map((t) => (
                <li key={t.id} className="todolist">
                  <span className="content"> {t.todo}</span>
                  <button className='btn btn-danger delete-btn' onClick={() => handleDelete(t)} > Delete</button>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
