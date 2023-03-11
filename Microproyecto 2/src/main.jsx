import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Homepage } from './Pages/Homepage/Homepage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/RegisterPage/RegisterPage'
import { HOME_URL, LOGIN_URL, REGISTER_URL } from './Urls/Urls'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
   <Route element={<Layout/>}>
    <Route path={HOME_URL} element={<Homepage/>}/>
    <Route path={REGISTER_URL} element={<RegisterPage/>}/>
    <Route path={LOGIN_URL} element={<LoginPage/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
</React.StrictMode>,
)
