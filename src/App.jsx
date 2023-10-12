import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import { Checkout, DetailOrder, DetailProduct, ForgotPassword, HistoryOrder, Home,Login,Product, Profile,Register } from './pages'
  

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/historyOrder' element={<HistoryOrder/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>} />
        <Route path='/detailOrder' element={<DetailOrder/>} />
        <Route path='/detailProduct' element={<DetailProduct/>} />
      </Routes>
    </Router>
  )
}

export default App
