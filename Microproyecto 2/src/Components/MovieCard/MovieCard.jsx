import React from 'react'
import { Link } from 'react-router-dom'

export function MovieCard({movie}) {
    
  return (
    <Link to={`/movie/${movie.id}`}>
    <div className='flex flex-col items-center mb-[60px] w-[120px] border-4 border-gray-500'>
        
        <div className='w-[80px] '> {/* Poster de la película*/}
            <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}   alt="" />
        </div>
        
        <div className=' flex flex-col text-[10px] items-center text-center text-white'> 
            <h1>{movie.title}</h1>
            <h3>Popularidad: {movie.popularity}</h3>
            <h3>Idioma: {movie.original_language}</h3>
        </div>
       
    </div>
    </Link>
  )
}
