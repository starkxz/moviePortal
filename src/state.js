import { useState } from "react";

const State = () => {
    let [ value,setvalue ] = useState(0)
    let increase = () =>{
        setvalue(++value)
    }
    let reset = () =>{
        setvalue(0)
    }
    let decrease =() => {
        setvalue(--value)
    }
    return ( 
        <div className="state">
            <h1>{value}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
        </div>
     );
}
 
export default State;