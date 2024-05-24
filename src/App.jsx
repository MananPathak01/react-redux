
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import { Provider } from 'react-redux';
import store from './store'

function App() {

  return (
    <>
  <Provider store = {store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
      </Router>
      </Provider>
    </>
  )
}

export default App
