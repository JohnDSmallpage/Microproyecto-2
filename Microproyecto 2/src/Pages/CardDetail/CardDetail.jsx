import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getSingleMovie } from '../../utils/moviesApi';
import estrellita from '../../imagenes/estrellita.png';

export function CardDetail() {
    const [movie, setMovie] = useState([]);
    let variable;
    const {movie_id} = useParams();
    const getMovie= async (movie_id) => {
        const {data} = await getSingleMovie(movie_id);
        console.log(data);
        setMovie(data);
      }

      useEffect( () => {
        getMovie(movie_id);
      }, [])

  return (
    <div id= 'main-container' className='flex flex-col text-white p-6 font-bold bg-black'>
        <div id='title' className='mb-2 h-1/5' >
            <h1 className='text-yellow-300'>{movie.title}</h1>
            <p>{movie.release_date}</p>
        </div>

        <div id='middle-container' className='flex flex-row justify-between h-2/5'>
            <div id='poster' className='w-1/2'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            </div>

            <div id='info' className='flex flex-col ml-3 w-1/2 text-xs text-justify'>
                <div className='h-1/5 flex justify-center items-center overflow-y-scroll mb-[-10px]'>
                {
                    
                    movie.genres?.map( (genre, idx) => (
                        variable= genre.name + " "      
                    ) )
                   
                }
                
                </div>
                <hr className='my-2'/>
                <p className='h-3/5 overflow-y-scroll'>{movie.overview}</p>
                
                <hr className='my-2'/>
                <div className='h-1/5 flex flex-col justify-center items-center'>
                    
                    <img src={estrellita} alt="" className='w-1/5 h-1/2' />
                    <p className='h-1/2 mt-2'>{movie.vote_average} /10</p>
                    
                </div>
               
                
            </div>
        </div>
        <hr className='my-2'/>
        <div id='bottom-container' className='h-2/5'>
                <p>
                    Productora: 
                {
                    
                    movie.production_companies?.map( (company, idx) => (
                        variable= " " + company.name 
                    ) )
                   
                }
                </p>
                <hr className='my-2'/>
                <p>

                Idiomas: 
                {
                    
                    movie.spoken_languages?.map( (language, idx) => (
                        variable= " " + language.name 
                    ) )
                   
                }
                    
                </p>
                <hr className='my-2'/>
                <p>
                    Presupuesto: {movie.budget}$
                </p>
                <hr className='my-2'/>
                <p>
                    Estado: {movie.status}
                </p>
                <hr className='my-2'/>
        </div>
    </div>
  )
}
