import { Navigation } from "./navigation"
import { HamburgerMenu } from "./hamburgerMenu"
import { useState } from "react"
import { Dialog } from "../Dialog/dialog"



export const Header = () => {
      const [ openLogin , setOpenLogin ] = useState(false);

      function checkState(){
            setOpenLogin(!openLogin);
            if(openLogin){
                  console.log("openLogin!!!!");
            }else{
                  console.log("not Open!")
            }
      }

      return (
            <div className="Header shadow-lg text-white px-3 bg-slate-800 py-5 md:py-8 transition-all duration-300">
                  <div className="max-w-7xl flex justify-between relative mx-auto">

                  <div className="logoBrand flex items-center uppercase text-2xl mx-5 md:mx-0">SingtoDev</div>
                  <div className="Navigation hidden md:flex items-center text-sm">
                        <Navigation/>
                        <button onClick={checkState} className="md:px-4 lg:px-10 shadow-md uppercase mx-1 py-2 bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600 hover:bg-blue-700 rounded-md">LOGIN</button>
                        <button className="md:px-4 lg:px-10 shadow-md uppercase mx-1 py-2 bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-600 hover:bg-yellow-700 rounded-md">REGISTER</button>
                  </div>
                  <div className="md:hidden flex text-white">
                        <HamburgerMenu />
                  </div>
 
                  </div>

                  { openLogin ? <Dialog control={setOpenLogin} type="login" /> : null }

            </div>

      )
}