import { useState } from 'react'
import './App.css'

function App() {
 let [counter, setCounter] = useState(10);

  let add=()=>{
    if(counter==50){
      setCounter(counter);
      alert("Max Possible value of Counter is 50");

    }else{
          setCounter(counter+1);
    }
    
    // console.log(counter);
  };

  let sub =()=>{
       if(counter==0){
      setCounter(counter);
      alert("Min Possible value of Counter is 0");
    }else{
          setCounter(counter-1);
    }
      // console.log(counter);
  }

  let reset=()=>{
        setCounter(0);
  }

  return(
    <>
    
    <div className='bg-black  w-150  ml-110 mt-10 p-15 rounded-2xl  text-center  ' >
    <br></br>
    <h1 className='text-6xl text-green-400 '>Counter</h1>
     <br></br>
      <br></br>
    
    

    <h1 className='text-8xl text-blue-400 '>{counter}</h1>
     <br></br>
      

      <button onClick={sub} className='text-yellow-200 text-2xl border-4 p-2 m-2'>Decrease</button>  &nbsp;
    
    <button onClick={reset} className='text-yellow-200 text-2xl border-4 p-2 m-2'>Reset</button>  &nbsp;

    <button onClick={add} className='text-yellow-200 text-2xl border-4 p-2 m-2' > Increase</button> &nbsp;
     
     
     
     <br></br> <br></br>
   

   <h3  className='text-orange-300 text-2xl '> Value of counter will be between 0 and 50 only.</h3> <br></br> <br></br><br></br><br></br>
    

    <p className='text-orange-300 text-2xl '>Made with &hearts; for learning react hook(usestate) and Tailwind basics!!</p>
    </div>
  
    </>
      
  )
}

export default App
