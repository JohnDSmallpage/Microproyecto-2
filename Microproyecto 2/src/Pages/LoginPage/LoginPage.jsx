import React, { useState } from 'react'
import Twitter from '../../imagenes/twitter.png'
import Google from '../../imagenes/google.png'
import Logo from '../../imagenes/logoDonPeliculonBN.png'
import { HOME_URL, LOGIN_URL, REGISTER_URL } from '../../Urls/Urls'
import { Link, useNavigate } from 'react-router-dom'
import { logInWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service'
import { useUser } from '../../Context/userContext'
import { returnError } from '../../firebase/auth-service'
import { completed } from '../../firebase/auth-service'


export function LoginPage() {
  const{user}=useUser();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const[formData,setFormData]=useState({
    email:'',
    password:'',
})
  
//const para el login con google
    const handleSigninWithGoogle = async ()=>{
        await signInWithGoogle();
        navigate(HOME_URL)
    }

    const onSubmit = async(event)=>{
      event.preventDefault();//evita que el form recargue la pagina
      const{email,password}=formData//form destructurado
      await logInWithEmailAndPassword(email,password);
      if(completed){
        navigate(HOME_URL)
      }else{
        setError(returnError())
      }
      
  }
  //en cada input utiliza la informacion del campo para agregarla al form existente
  const handleOnChange = (event)=>{
      const{name,value}=event.target;
      setFormData({
          ...formData,
          [name]:value,
      })
  }

    function alerta() {
      window.alert("Lo intentamos pero papi Elon Musk no nos dio permiso de usar la Api de Twitter");
    }

  return (
    <div className='flex flex-col justify-center align-center h-screen'>
        <div id='Logo' className='h-1/5 flex justify-center'>
          <img src={Logo} alt="" />
        </div>
        <div className='flex justify-center align-center text-white text-4xl font-bold'>
          <p>Iniciar Sesion</p>
        </div>
        <div id='container' className='w-[350px] sm:w-[400px] mx-auto  p-6 rounded-xl h-3/5 my-5 '>
        
        <div id='inicios'>

            <button onClick={handleSigninWithGoogle} className="w-full bg-white text-center py-3 my-3 border flex space-x-2 items-center justify-center rounded-lg hover:shadow">
                <img src={Google} className="w-6 h-6" alt=""/> <span>Iniciar con Google</span>
            </button>

            <button  onClick={alerta} className="w-full bg-white text-center py-3 my-3 border flex space-x-2 items-center justify-center rounded-lg hover:shadow">
                <img src={Twitter} className="w-6 h-6" alt=""/> <span>Iniciar con Twitter</span>
            </button>

        </div>

        
        
        <div id='form'>
          <form action="" onSubmit={onSubmit}>
            <div className="flex flex-col space-y-5">
              
              <label htmlFor="email">
                  <input 
                  id="email" name="email" type="email" 
                  onChange={handleOnChange}
                  className="w-full py-3 border  rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Dirección de Correo"/>
              </label>

              <label htmlFor="password">
                  <input id="password" name="password" type="password" 
                  onChange={handleOnChange}
                  className="w-full py-3 border  rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Contraseña"/>
              </label>
              <p className='text-red-700'>{error}</p>
              <button  className='bg-gray-600 p-3 rounded-lg text-white  '>Iniciar sesion</button>
              
              <p className="text-center text-white">No tienes una cuenta? <Link to={REGISTER_URL} className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                <span>Registrate! </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></span></Link>
              </p>

            </div>
          </form>
        </div>
    </div>
    </div>
  )
}