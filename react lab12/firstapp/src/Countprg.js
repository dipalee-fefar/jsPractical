import React, { useEffect, useState } from "react";

const Countprg =()=>{
    const [count , setcount]=useState(0)
    const [count1, setcount1]=useState(0)
    
    useEffect(()=>{
        setInterval(()=>{
            console.log("Hello React");
        },1000)
    },[])

    return(
        <>
        
        <h1>{count}</h1>
        <button onClick={()=>{
            setcount(count+1)
            console.log(count)
        }}>increment</button>

        <h1>{count1}</h1>
        <button onClick={()=>{
            setcount1(count1-1)
            console.log(count1)
        }}>decrement</button>
        </>
    )
}

export default Countprg