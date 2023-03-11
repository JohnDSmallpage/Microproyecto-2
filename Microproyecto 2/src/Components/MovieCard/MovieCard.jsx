import React from 'react'

export function MovieCard({movie}) {

  return (
    <div>
        <div className='w-[200px]'> {/* Poster de la película*/}
            {/* FALTA  */}
        </div>
        
        <div className='flex flex-col text-[10px] items-center text-white'> {/*Info de la carta de la película*/}
            <h1>{movie.title}</h1>
            <h3>{movie.popularity}</h3>
            <h3>{movie.original_language}</h3>
        </div>
    </div>
  )
}
