import React, { useState } from 'react'
import Lupa from '../../imagenes/search-line.png'
import FlechaIzq from '../../imagenes/arrow-left-s-line.png'
import FlechaDer from '../../imagenes/arrow-right-s-line.png'

export function SearchPage(){

    return (
        <div className=''>
            
            <label htmlFor="busqueda">
                <div className='flex flex-row'>
                    <input 
                    id="busqueda" name="busqueda" type="busqueda" 
                    className="absolute w-[309px] h-[50px] bg-[#D9D9D9] rounded-[12px] p-2" placeholder="Ingrese el nombre de la pelicula"/>
                    
                    <button /* onClick={}*/ className='absolute w-[50px] h-[50px] bg-[#3B4443] rounded-[12px]'>
                        <img className='w-[24px] h-[24px]' src={Lupa} alt="" />
                    </button>

                </div>
            </label>
            

            <label htmlFor= "resultados"> 
                <div className=''>
                    <div className='absolute w-[364px] h-[619px] bg-[#D9D9D9] rounded-[12px]'>

                    </div>
                </div>
            </label>

            <label htmlFor= "paginas">
                <div className=''>
                    <button /* onClick={}*/ className=' w-[50px] h-[50px] bg-[#3B4443] rounded-[12px]'>
                        <img className=' w-[24px] h-[24px]' src={FlechaIzq} alt="" />
                    </button>

                    <button /* onClick={}*/ className=' w-[50px] h-[50px] bg-[#3B4443] rounded-[12px]'>
                        <img className=' w-[24px] h-[24px]' src={FlechaDer} alt="" />
                    </button>    
                </div>
            </label>

        </div>
    )
}