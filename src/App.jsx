import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Box from './Box'
import { Route,Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/box' element={<Box/>}/>
      <Route path='/' element={<Todo/>}/>
    </Routes>
     {/* <Todo/> */}
    </>
  )
}

export default App
