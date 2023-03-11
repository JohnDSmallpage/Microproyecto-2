import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_URL, LOGIN_URL, REGISTER_URL } from '../../Urls/Urls'

export function Navbar() {
  return (
    <nav className='bg-black flex p-3'>
        <div id='firstHalf' className='flex justify-items-center w-2/4 text-white '>

        </div>
        <div id='secondHalf' className='flex justify-items-center w-2/4 text-white justify-end'> 
            <Link to={REGISTER_URL} className='mx-4 text-xs font-bold'>Registrate</Link>
            <Link to={LOGIN_URL} className='mx-4 text-xs font-bold'>Iniciar Sesion</Link>
        </div>
    </nav>
  )
}
