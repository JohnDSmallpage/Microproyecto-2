import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Homepage } from './Pages/Homepage/Homepage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/RegisterPage/RegisterPage'
import { SearchPage } from './Pages/SearchPage/SearchPage'
import { HOME_URL, LANDING_URL, LOGIN_URL, REGISTER_URL, SEARCH_URL } from './Urls/Urls'
import { LandingPage } from './Pages/LandingPage/LandingPage'
import { PrivateRoute } from './Components/PrivateRoutes/PrivateRoutes'
import { CardDetail } from './Pages/CardDetail/CardDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
   <Route element={<Layout/>}>
    <Route path={LANDING_URL} element={<LandingPage/>}/>
    <Route path={REGISTER_URL} element={<RegisterPage/>}/>
    <Route path={LOGIN_URL} element={<LoginPage/>}/>
    <Route path={HOME_URL} element={<PrivateRoute><Homepage/></PrivateRoute>}/>
    <Route path={SEARCH_URL} element={<SearchPage/>}/>
    <Route path='/movie/:movie_id' element={<CardDetail/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
</React.StrictMode>,
)
