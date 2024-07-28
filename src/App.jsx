import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagenotfound from './pages/Pagenotfound'
import Menu from './pages/Menu'

function App() {


  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
