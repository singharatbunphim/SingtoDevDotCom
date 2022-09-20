import { useState } from "react"


export const Navigation = () => {
      return(
            <div className="mx-5 flex">
                  <div className="ItemLink transition-all duration-300 hover:bg-slate-600 cursor-pointer px-3 py-1 whitespace-nowrap rounded-sm md:mx-1 lg:mx-3 uppercase">Home</div>
                  <div className="ItemLink transition-all duration-300 hover:bg-slate-600 cursor-pointer px-3 py-1 whitespace-nowrap rounded-sm md:mx-1 lg:mx-3 uppercase">About Us</div>
                  <div className="ItemLink transition-all duration-300 hover:bg-slate-600 cursor-pointer px-3 py-1 whitespace-nowrap rounded-sm md:mx-1 lg:mx-3 uppercase">My Work</div>
                  <div className="ItemLink transition-all duration-300 hover:bg-slate-600 cursor-pointer px-3 py-1 whitespace-nowrap rounded-sm md:mx-1 lg:mx-3 uppercase">Contact</div>
            </div>
      )
}