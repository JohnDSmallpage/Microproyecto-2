import React, { useState } from 'react'
import Twitter from '../../imagenes/twitter.png'
import Google from '../../imagenes/google.png'
import Logo from '../../imagenes/Logo.png'
import { LOGIN_URL } from '../../Urls/Urls'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../../firebase/auth-service'

export function RegisterPage() {
  // const navigate = useNavigate();
  //   const [formData,setFormData] =useState({
  //       name:"",
  //       email:"",
  //       password:"",
  //       confirmPassword:"",
  //   })
  
//const para el login con google
    const handleSigninWithGoogle = async ()=>{
        await signInWithGoogle();
        // navigate()
    }

//     const onSubmit = async(event)=>{
//         event.preventDefault();//evita que el form recargue la pagina
//         const{email,password,...extraData}=formData//form destructurado
//         await registerWithEmailAndPassword(email,password,extraData);
//         navigate(PERFIL_CLIENTE)
//     }
// //en cada input utiliza la info del campo para agregarla al form existente
//     const handleOnChange = (event)=>{
//         const{name,value}=event.target;
//         setFormData({
//             ...formData,
//             [name]:value,
//         })
//     }
  
  return (
    <div className='flex flex-col justify-center align-center h-screen'>
        <div id='Logo' className='h-1/5 flex justify-center'>
          <img src={Logo} alt="" />
        </div>
        <div className='flex justify-center align-center text-white text-4xl font-bold'>
          <p>Registro</p>
        </div>
        <div id='container' className='w-4/5 mx-auto  p-6 rounded-xl h-3/5 my-5 '>
        <div id='registros'>
            <button onClick={handleSigninWithGoogle} className="w-full bg-white text-center py-3 my-3 border flex space-x-2 items-center justify-center rounded-lg hover:shadow">
                <img src={Google} className="w-6 h-6" alt=""/> <span>Iniciar con Google</span>
            </button>
            <button  className="w-full bg-white text-center py-3 my-3 border flex space-x-2 items-center justify-center rounded-lg hover:shadow">
                <img src={Twitter} className="w-6 h-6" alt=""/> <span>Iniciar con Twitter</span>
            </button>
        </div>
        <p className='text-white'>Correo y contraseña</p>
        <div id='form'>
            <form action="">
            <div className="flex flex-col space-y-5">
            <label htmlFor="name">
                    <input 
                    id="name" name="name" type="text" 
                    
                    className="w-full py-3 border  rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Nombre completo"/>
                </label>
                <label htmlFor="email">
                    <input 
                    id="email" name="email" type="email" 
                    
                    className="w-full py-3 border  rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Dirección de Correo"/>
                </label>
                <label htmlFor="password">
                    <input id="password" name="password" type="password" 
                    
                    className="w-full py-3 border  rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Contraseña"/>
                </label>
                <label htmlFor="confirmar">
                    <input id="confirmPassword" name="confirmPassword" type="password" 
                    
                    className="w-full py-3 border  rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ingresa nuevamente la contraseña"/>
                </label>
                <button className='bg-gray-600 p-3 rounded-lg text-white  '>
                  Login
                </button>
                 <p className="text-center text-white">Ya tienes una cuenta? <Link to={LOGIN_URL} className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Inicia sesion! </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg></span></Link></p>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}
