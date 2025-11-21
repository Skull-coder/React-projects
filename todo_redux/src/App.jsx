import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.css'
import { addTodo, removeTodo } from './features/todo/todoSlice'

function App() {
  const [value, setValue] = useState('');
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      <div className=' flex flex-col gap-3 '>
        <div className='bg-gray-400 p-3 rounded-2xl'>
          <input type="text" placeholder='Task to complete!' className='text-black p-4 outline-0' value={value} onChange={(e) => setValue(e.target.value)} />
          <button className='p-3 px-4 rounded-xl bg-white text-black ' onClick={() => { dispatch(addTodo(value)), setValue("") }}>Add</button>
        </div>

        <div className='flex flex-col p-3 gap-3 hide-scrollbar h-[300px] overflow-y-scroll'>
          {todo.map((item) => (
            <div className='flex items-center justify-between gap-1' key={item.id}>
              <p >{item.text}</p>
              <button className='border-2 border-red-500 p-2 rounded-sm' onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
