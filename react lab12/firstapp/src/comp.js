import React from "react";

export function MyComp(){
    return (
        <>
        <p>
        Hey there !!!!
        this is Component file example
        </p>
        </>
    )
}

export function Conditionalrender(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <>usergreeting</>
    }
    return(
    <> guest greeting</>
    )
}

// Conditionalrender({isDisplay}){
//     return(
//         <>
//         {isDisplay? <h1>condition true</h1>: <h1>condition fales</h1>}
//         </>
//     )
// }