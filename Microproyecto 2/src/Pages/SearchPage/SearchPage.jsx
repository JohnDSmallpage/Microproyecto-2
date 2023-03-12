import React, { useState } from "react";
import Lupa from "../../imagenes/search-line.png";
import FlechaIzq from "../../imagenes/arrow-left-s-line.png";
import FlechaDer from "../../imagenes/arrow-right-s-line.png";

export function SearchPage() {
  return (
    <div className="flex flex-col h-screen">
      <label htmlFor="busqueda">
        <div className="flex flex-row items-center justify-center pt-[20px] gap-[5px]">
          <input
            id="busqueda"
            name="busqueda"
            type="busqueda"
            className="w-[309px] h-[50px] bg-[#D9D9D9] rounded-[12px] p-2"
            placeholder="Ingrese el nombre de la pelicula"
          />

          <button
            /* onClick={}*/ className="flex justify-center items-center w-[50px] h-[50px] bg-[#3B4443] rounded-[12px]"
          >
            <img className="w-[24px] h-[24px]" src={Lupa} alt="" />
          </button>
        </div>
      </label>

      <label htmlFor="resultados">
        <div className="flex justify-center items-center pt-[20px]">
          <div className="w-[364px] h-[619px] bg-[#D9D9D9] rounded-[12px]"></div>
        </div>
      </label>

      <label htmlFor="paginas">
        <div className="flex justify-evenly items-center pt-[8px]">
          <button
            /* onClick={}*/ className="flex justify-center items-center w-[50px] h-[50px] bg-[#3B4443] rounded-[12px]"
          >
            <img className=" w-[24px] h-[24px]" src={FlechaIzq} alt="" />
          </button>

          <div className="w-[139px] h-[50px] bg-[#3B4443] rounded-[12px]">

          </div>

          <button
            /* onClick={}*/ className="flex justify-center items-center w-[50px] h-[50px] bg-[#3B4443] rounded-[12px]"
          >
            <img className=" w-[24px] h-[24px]" src={FlechaDer} alt="" />
          </button>
        </div>
      </label>
    </div>
  );
}
