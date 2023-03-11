import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { getMoviesList } from '../../utils/moviesApi';

export function Homepage() {

  const[movies, setMovies] = useState([]);

  const getMovies= async () => {
    const {data} = await getMoviesList();
    setMovies(data.results)
  }

  useEffect( () => {
    getMovies();
  }, [])

  return (

    <div>
      <h1>Películas Comunes</h1>
      
      <div>
        {movies.map((movie, idx) => (
          <MovieCard movie={movie} key={idx}/>
        )
        )}
      </div> 





    </div>
    
  )
}
