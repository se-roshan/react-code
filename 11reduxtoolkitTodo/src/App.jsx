import { useState } from 'react' 
import AddTodo from './components/AddTodo'  
import Todos from './components/Todos' 
import './App.css'

function App() { 
  const [editId, setEditId] = useState(null);

  return (
    <>
    <h1>Learn About Redux toolkit || Todo</h1>
    {/* <AddTodo/>
    <Todos/> */}
    <AddTodo editId={editId} setEditId={setEditId} />
    <Todos setEditId={setEditId} />
    </>
  )
}

export default App
