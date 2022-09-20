
import { useState } from 'react';
import { Banner } from './components/Banner/main';
import { RegisterForm } from './components/Forms/register';
import { Header } from './components/header/main';


export default function Home() {

  const [checkRegister,setCheckRegister] = useState(null)
  
  return (
    <div>
        {/* {checkRegister == "subscriber" ? checkRegister : null}
        <RegisterForm setCheckRegister={setCheckRegister} /> */}
        <Header />
        <Banner />

        
    </div>
  )
}


