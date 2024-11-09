import React from "react";

export function MapDemo(){
    var arr=[1,2,3,4,5];
    return(
    <>
    <h3>your elements</h3>
    {arr.map((ele)=>{
        return(
            <>
                <h4>{ele}</h4>
            </>
        )
    })}
    </>
    )
}
// export function MapDemo(){
//     var arr=[1,2,3,4,5];
//     var mapedarr = arr.map((ele)=>{
//         return(
//             <h1>{ele}</h1>
//         )
//     })
//     return(
//         <>
//            {mapedarr}
//         </>
//     );
// }

export function Faculities(){
    var fac=["abc","efg","hij","kln","opq"];
    return(<>
        <h3>your Faculities are</h3>
        {fac.map((index,name)=>{
            return(<>
              
                <h4>{index}-{name}</h4>
                </>
            )
        })}
        </>
    )
}

export function Student(){
    var std=["dipalee","monank","tapan","nikita","meera"];
    
    return(
        <>
        <h1>Student</h1>
        {std.map((name)=>{
            
            return(<>
                
                <h4>{name}</h4>
                </>
            )
        })}
        </>
    )
}