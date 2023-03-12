import React from 'react'
import background from '../../imagenes/fondo2.png'
import { Link } from 'react-router-dom'
import { LOGIN_URL, REGISTER_URL } from '../../Urls/Urls'

export function LandingPage() {
  return (
    <div id='container' style={{ backgroundImage: `url(${background})` }} className="flex items-center justify-center bg-black bg-opacity-50 bg-contain w-full h-full">
      
      <div className='flex items-center flex-col justify-center h-[500px] '>
        <p className='sm:text-3xl text-white text-2xl font-extrabold text-center'>Busca las mejores peliculas y cuando Verlas</p>
        
      <div className='flex items-center justify-center flex-col' >
      <p className='text-white font-semibold text-xs sm:text-sm m-2 text-center'>Quieres ver las peliculas disponibles? Registrate y hazlo de inmediato.</p>
        <div className='flex flex-row justify-evenly w-full'>
        <Link className='text-white bg-indigo-800 p-2 sm:p-4 sm:text-xl rounded-lg hover:bg-indigo-600 border-2 border-black' to={LOGIN_URL}>Inicia Sesion</Link>
        <Link className='text-white bg-indigo-800 p-2 sm:p-4 sm:text-xl rounded-lg hover:bg-indigo-600 border-2 border-black' to={REGISTER_URL}>Registrate</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
