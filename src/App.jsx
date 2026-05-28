import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 let [counter, setCounter] = useState(10);

  let add=()=>{
    if(counter==20){
      setCounter(counter);
    }else{
          setCounter(counter++);
    }
    
    // console.log(counter);
  };

  let sub =()=>{
       if(counter==0){
      setCounter(counter);
    }else{
          setCounter(counter--);
    }
      // console.log(counter);
  }

  return(
    <>
    <h1>Chai aur react</h1>
    <h3>hi</h3>
    <h3>  Value of counter will be between 0 and 20</h3>

    <h2>Counter Value:{counter}</h2>
    <button onClick={add}>AddValue:{counter}</button>
    <button onClick={sub}>RemoveValue:{counter}</button>

    <p>footer:{counter}</p>
    </>
  
  )
}

export default App
