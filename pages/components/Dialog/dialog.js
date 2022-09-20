
import { Login } from "../Forms/login"


export const Dialog = ({type,setOpenLogin}) => {

      return (
            <div className="absolute w-full h-full z-50 bg-black/50 top-0 left-0 flex justify-center items-center">
                  <div className="md:w-[50vw] bg-red-100 h-auto shadow-lg  text-black rounded-md flex  justify-center">
                        {type == "login" ? <Login / > : null}
    
                  </div>
            </div>
      )
}