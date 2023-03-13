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
        <div id='firstHalf' className='flex w-2/4 text-white '>
        {user&&(
         <Link to={HOME_URL} className='flex flex-row items-center mx-4 text-xs font-bold hover:text-yellow-400 '><img className='w-[60px]
         ' src={Logo} alt=""/>Don Peliculon</Link> 
        )}
        {!user&&(
        <Link to={LANDING_URL} className='flex flex-row items-center mx-4 text-xs font-bold hover:text-yellow-400 '><img className='w-[45px] h-[45px]' src={Logo} alt=""/>Don Peliculon</Link>
        )}
        </div>
        <div id='secondHalf' className='flex justify-items-center w-2/4 text-white justify-end'> 

          <div className='group'>
          <button className='block py-3 px-4 mx-2 rounded  hover:bg-gray-400'>
            <div className='w-5 h-1 bg-white mb-1'></div>
            <div className='w-5 h-1 bg-white mb-1'></div>
            <div className='w-5 h-1 bg-white' ></div>
            </button>  
            <div className='absolute pt-10 top-0 hidden group-hover:block  -right-full h-screen w-[180px] bg-black border  
            group-hover:right-0 group-focus:opacity-100 transition-all duration-300'>
            {user&&(
              <div className='flex flex-col items-center justify-center w-full text-base cursor-pointer pt-10'>
              <Link to={SEARCH_URL} className='flex  items-center justify-center mx-4 text-xs font-bold p-6 hover:bg-white hover:text-black bg-black w-full h-[15px]'>Buscar Peliculas</Link>
              <button onClick={handleLogout} className="flex items-center justify-center mx-4 text-xs font-bold p-6 hover:bg-white hover:text-black bg-black w-full h-[15px] ">Logout</button>
              
            </div>
              )}
            {!user&&(
              <div className='flex flex-col items-center justify-center w-full text-base cursor-pointer pt-10'>
                <Link to={REGISTER_URL} className='flex items-center justify-center mx-4 text-xs font-bold p-6 hover:bg-white hover:text-black bg-black w-full h-[15px] '>Registrate</Link>
                <Link to={LOGIN_URL} className='flex items-center justify-center mx-4 text-xs font-bold p-6 hover:bg-white hover:text-black bg-black w-full h-[15px] '>Iniciar Sesion</Link>
              </div>

        )}
        </div>
        </div>
        </div>
    </nav>
  )
}
