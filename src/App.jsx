import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './pages/adminPage'
import LoginPage from './pages/loginPage'
import TestingPage from './pages/testingPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/client/register'

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Toaster position="top-right"/>

        <Routes path="/*">

          <Route path="/" element={<h1>Home page</h1>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/*" element={<h1>404 not found</h1>}/>
          <Route path="/testing" element={<TestingPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>

        </Routes>
      
      
      
      </BrowserRouter>

    
    </>
  )
}



export default App
