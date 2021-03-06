import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/dist/v4'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'todoApp.todos'


useEffect(() => {
const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
if (storedTodos) setTodos(storedTodos)
}, [])


useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify
  (todos)
  )
}, [todos])


function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}




function handleAddTodo(e) {
const name = todoNameRef.current.value
if (name === '') return
setTodos(prevTodos => {
  return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
})
todoNameRef.current.value = null
}


function handleClearTodos() {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <>
    <h1>2DO</h1>
    <input className="textinfo" ref={todoNameRef} type="text" />
    <p>Type a todo in the text block and "click add todo". Once the todo is finished, click on the check box. To remove todos, click "clear complete"</p>
    <div>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Complete</button></div>
    <div className="todosincomplete">{todos.filter(todo => !todo.complete).length} Tasks Incomplete</div>

   <div className="alltodos"> <TodoList todos={todos} toggleTodo={toggleTodo}/>
   </div>
    </>
  )
  
}

export default App;
