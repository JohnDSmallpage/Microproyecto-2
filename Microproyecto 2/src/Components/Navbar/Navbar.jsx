import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../Context/userContext';
import { logout } from '../../firebase/auth-service';
import { HOME_URL, LOGIN_URL, REGISTER_URL } from '../../Urls/Urls'

export function Navbar() {
  const{user}=useUser();
   const handleLogout = async ()=>{
      await logout()
   }
  return (
    <nav className='bg-black flex p-3'>
        <div id='firstHalf' className='flex justify-items-center w-2/4 text-white '>

        </div>
        <div id='secondHalf' className='flex justify-items-center w-2/4 text-white justify-end'> 
        {user&&(
          <button onClick={handleLogout} className="mx-4 text-xs font-bold">Logout</button>
        )}
        {!user&&(
          <div>
          <Link to={REGISTER_URL} className='mx-4 text-xs font-bold'>Registrate</Link>
          <Link to={LOGIN_URL} className='mx-4 text-xs font-bold'>Iniciar Sesion</Link>
          </div>
        )}
        </div>
    </nav>
  )
}
