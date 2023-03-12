import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { getMoviesList } from '../../utils/moviesApi';

export function Homepage() {

  const[movies, setMovies] = useState([]);
  const[page, setPage] = useState(1);
  const maxpage= 500;

  const getMovies= async (page) => {
    const {data} = await getMoviesList(page);
    setMovies(data.results)
  }

  useEffect( () => {
    getMovies(page);
  }, [page])





  return (

    <div>
      <h1>Películas Comunes</h1>
      
      <div className='flex flex-row flex-wrap justify-around overflow-y-scroll h-[500px]'>
        {movies.map((movie, idx) => (
          <MovieCard movie={movie} key={idx}/>
        )
        )}
      </div> 

      <div className='flex  justify-evenly items-center flex-row text-white'>
        <button onClick={() => {if(page!=1){setPage(page-1)}}}>Anterior</button>
        <button >{page}</button>
        <button onClick={() => {setPage(page+1)}}>{page+1}</button>
        <button onClick={() => {setPage(page+2)}}>{page+2}</button>
        <button onClick={() => {if(page!=maxpage){setPage(page+1)}}}>Siguiente</button>
      </div>





    </div>
    
  )
}
