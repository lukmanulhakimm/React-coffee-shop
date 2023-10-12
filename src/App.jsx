import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import { Checkout, Home,Login,Product } from './pages'
  

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
