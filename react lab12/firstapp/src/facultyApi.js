import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const FacultyApi = () => {

const [data,setData]= useState([]);

useEffect(()=>{
    fetch('https://65f01c96da8c6584131acf73.mockapi.io/Faculties')
    .then((res)=>res.json())
    .then((res)=>{setData(res)})
})

const mappedData = data.map((ele)=>{
    return(
        
        <div class="card" style={{width: "18rem"}}>
        <img src={ele.FacultyImage} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{ele.FacultyName}</h5>
                <p class="card-text">This is example of api using card </p>
                <Link to={'/'+ele.FacultyID} class="btn btn-primary">Click to view </Link>
            </div>
        </div>
        
    )
})

  return (
    <div className='row'>
      {mappedData}
    </div>
  )
}

export default FacultyApi
