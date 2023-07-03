import React ,{ useState } from "react"
import './App.css'

 function App () {

    const [count,setCount] =useState(0)
  return (
    <div className="box" >
        <div className="heading" >
            <h1>COUNTER</h1>
        </div> 
        <div className="circle">
            <h2> {count}</h2>
             </div>
             
             <div>
             <div className="btn">
            <button  className="btn-one" onClick={()=>setCount(count + 1)}>＋</button>
            <button  className="btn-two" onClick={()=>setCount(0)}>RESET</button>
            <button  className="btn-three" onClick={()=>(count< 1 ? "":setCount(count - 1))}>–</button>
             </div>
        </div>

    </div>
  )
}

export default App;