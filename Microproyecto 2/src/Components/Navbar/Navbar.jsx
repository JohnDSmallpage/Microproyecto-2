import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../Context/userContext';
import { logout } from '../../firebase/auth-service';
import { HOME_URL, LANDING_URL, LOGIN_URL, REGISTER_URL, SEARCH_URL } from '../../Urls/Urls'
import Logo from '../../imagenes/logoDonPeliculonBN.png'

export function Navbar() {
  const{user}=useUser();
   const handleLogout = async ()=>{
      await logout()
   }
  return (
    <nav className='bg-black flex p-3'>
        <div id='firstHalf' className='flex justify-items-center w-2/4 text-white '>
          <Link to={LANDING_URL} className='mx-4 text-xs font-bold '>Don Peliculon</Link>
          <img className='w-[45px] h-[45px]' src={Logo} alt=""/>
        </div>
        <div id='secondHalf' className='flex justify-items-center w-2/4 text-white justify-end'> 
        {user&&(
          <button onClick={handleLogout} className="mx-4 text-xs font-bold">Logout</button>
        )}
        {!user&&(

          <button className='block md-hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group'>
            <div className='w-5 h-1 bg-gray-600 mb-1'></div>
            <div className='w-5 h-1 bg-gray-600 mb-1'></div>
            <div className='w-5 h-1 bg-gray-600' ></div>
            <div className='absolute top-0 -right-full h-screen w-8/12 bg-black border transform 
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
              <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>
              <Link to={REGISTER_URL} className='mx-4 text-xs font-bold'>Registrate</Link>
              <Link to={LOGIN_URL} className='mx-4 text-xs font-bold'>Iniciar Sesion</Link>
              <Link to={SEARCH_URL} className='mx-4 text-xs font-bold'>Buscar</Link>
              </ul>
            </div>
            
          </button>          

          //<div>
          //<Link to={REGISTER_URL} className='mx-4 text-xs font-bold'>Registrate</Link>
          //<Link to={LOGIN_URL} className='mx-4 text-xs font-bold'>Iniciar Sesion</Link>
          //<Link to={SEARCH_URL} className='mx-4 text-xs font-bold'>Buscar</Link>
          //</div>
        )}
        </div>
    </nav>
  )
}
