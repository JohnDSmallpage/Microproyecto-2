import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { getMoviesList } from '../../utils/moviesApi';
import { getCommingMovies } from '../../utils/moviesApi';

export function Homepage() {

  const[movies, setMovies] = useState([]);
  const[page, setPage] = useState(1);
  const [control, setControl] = useState(1);
  const[titleVariable, setTitleVariable]  = useState("Películas Actuales")
  const maxpage= 500;

  const getMovies= async (page) => {
    const {data} = await getMoviesList(page);
    setMovies(data.results)
  }

  const getCommingSoon= async (page) => {
    const {data} = await getCommingMovies(page);
    setMovies(data.results)
  }


  useEffect( () => {
    if(control==0){
      getMovies(page);
    }
    else{
      getCommingSoon(page);
    }
    
  }, [page, control])





  return (

    <div>
      <div className='flex justify-center'>
      <button className='text-white text-center mb-3 bg-blue-400 p-1 rounded
        lg:text-[20px]
        xl:text-[25px]
      
      ' onClick={() => {setControl(0), setTitleVariable("Películas Actuales")}}>Películas Actuales</button>
      <button className='text-white text-center mb-3 ml-3 bg-yellow-400 p-1 rounded
        lg:text-[20px]
        xl:text-[25px]
      ' onClick={() => {setControl(1), setTitleVariable("Próximos Estrenos")}} >Próximos estrenos</button>
      </div>
      <div> <h1 className='text-white  text-center mb-2 bg-slate-500  text-[22px]
        sm:text-[22px]
        md:text-[25px]
        lg:text-[28px]
        xl:text-[31px]
      '>{titleVariable}</h1> </div>
      
      <div className='flex flex-row flex-wrap justify-evenly overflow-y-scroll h-[500px]'>
        {movies.map((movie, idx) => (
          <MovieCard movie={movie} key={idx}/>
        )
        )}
      </div> 

      <div className='flex justify-evenly items-center flex-row text-white p-6
        sm:text-[22px]
        md:text-[22px]
        lg:text-[22px]
        xl:text-[22px]
      '>
        <button onClick={() => {if(page!=1){setPage(page-1)}}}>Anterior</button>
        <button >{page}</button>
        <button onClick={() => {setPage(page+1)}}>{page+1}</button>
        <button onClick={() => {setPage(page+2)}}>{page+2}</button>
        <button onClick={() => {if(page!=maxpage){setPage(page+1)}}}>Siguiente</button>
      </div>

    </div>
    
  )
}
