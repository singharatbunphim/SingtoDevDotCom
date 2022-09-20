import { useState } from "react"

export const RegisterForm = ({setCheckRegister}) => {

      const [username , setUsername] = useState(null);
      const [password, setPassword] = useState(null);


      const HandleClick = () => {
            setCheckRegister("subscriber");
      }
      
      return(
            <div>
                  <div class="row">
                        <label for="username">Username {username} </label>
                        <br/>
                        <input type="text" name="username" onKeyUp={ (e) => setUsername(e.target.value)} />
                  </div>
                  <div class="row">
                        <label for="password">password : {password}</label>
                        <br/>
                        <input type="password" name="password" onKeyUp={ (e)=> setPassword(e.target.value)} />
                  </div>
                  <div class="row">
                        <br/>
                        <button type="button" onClick={() => HandleClick()}>submit</button>
                  </div>
            </div>
      )
}


