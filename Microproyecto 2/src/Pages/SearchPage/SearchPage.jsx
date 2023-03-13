import React, { useState, useEffect } from "react";
import Lupa from "../../imagenes/search-line.png";
import { getSearchedMovies } from "../../utils/moviesApi";
import { MovieCard } from "../../Components/MovieCard/MovieCard";


export function SearchPage() {

  const[movies, setMovies] = useState([]);
  const[page, setPage] = useState(1)
  const[movie_name, setMovieName] = useState("")
  const[controlSearch, setControlSearch] = useState(0);
  const[Ready, setReady] = useState("Realice una búsqueda")

  const getMoviesSearch = async (page, movie_name) => {
    const {data} = await getSearchedMovies(page, movie_name);
    setMovies(data.results)
  }

  useEffect( () => {
    if(movie_name!=""){
      getMoviesSearch(page, movie_name)
      setReady("")
      setControlSearch(0)
    }
    
  }, [page, controlSearch])

  const handleInputChange = ({target}) => {
    setMovieName(target.value);
  }







  return (
    <div className="flex flex-col bg-black">
      <label htmlFor="busqueda">
        <div className="flex flex-row items-center justify-center pt-[20px] gap-[5px] border-b-2 p-2">
          <input
            id="busqueda"
            name="busqueda"
            type="busqueda"
            className="w-[309px] h-[50px] bg-[#D9D9D9] rounded-[12px] p-2
            sm:w-1/2 
            md:w-1/2
            lg:w-1/2
            xl:w-1/2 "
            placeholder="Ingrese el nombre de la pelicula"
            value={movie_name}
            onChange={handleInputChange}
          />

          <button
            className="flex justify-center items-center w-[50px] h-[50px] bg-[#3B4443] rounded-[12px]"
            onClick={() => {setReady(""),setControlSearch(1)}}
          >
            <img className="w-[24px] h-[24px]" src={Lupa} alt="" />
          </button>
        </div>
      </label>
      

      <label htmlFor="resultados">
        <div className="flex justify-center items-center pt-[20px] overflow-y-scroll">
          <div className="rounded-[12px]">
            <div className='flex flex-row flex-wrap justify-evenly'>
              {
                  Ready ?  <div className="flex h-20 items-center"><h1 className="text-white text-3xl">Realice una búsqueda</h1></div> : movies.map((movie, idx) => (
                    <MovieCard movie={movie} key={idx}/>
                  )
                  )
              }
            </div> 
          </div>
        </div>
      </label>

    </div>
  );
}
