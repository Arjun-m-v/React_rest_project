import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './assets/pages/Home'
import Edit from './assets/pages/Edit'
import Add from './assets/pages/Add'
import Header from './assets/components/Header'
import { Route,Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
    </>
  )
}

export default App
