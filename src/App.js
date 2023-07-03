import React ,{ useState } from "react"
import './App.css'

 function App () {

    const [count,setCount] =useState(0)
  return (
    <div className="box" >
        <div >
            <h1>COUNTER</h1>
        </div>
        <div>
            <div className="num"><h2> {count}</h2></div>
            
            <div className="btn">
            <button onClick={()=>setCount(count + 1)}>＋</button>
            <button onClick={()=>setCount(0)}>RESET</button>
            <button onClick={()=>(count< 1 ? "":setCount(count - 1))}>–</button>
        </div>
        </div>

    </div>
  )
}

export default App;