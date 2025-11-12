import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<h1>{<Home/>}</h1>}/>
        <Route path="/about" element={<h1>About Page</h1>}/>
        <Route path="/contact" element={<h1>Contact Page</h1>}/>
        <Route path="/login" element={<h1>Login Page</h1>}/>
        <Route path="/register" element={<h1>Regiater Page</h1>}/>
        <Route path="*" element={<h1>404 not found Error page</h1>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
