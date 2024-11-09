import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function FacById() {
  const { id } = useParams();
  const [ data, setData ] = useState({});
  var navigate = useNavigate();

  useEffect(() => {
    fetch("https://65f01c96da8c6584131acf73.mockapi.io/Faculties/" + id)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
  },[]);
  console.log(data);

  function deleteData(){
    fetch("https://65f01c96da8c6584131acf73.mockapi.io/Faculties/"+id,{method:"DELETE"})
      .then((res)=>{
        navigate('/')
      })
  }

  
  
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={data.FacultyImage} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{data.FacultyName}</h5>
          <p class="card-text">This is example of api using card </p>
          <Link to={'/Edit/'+data.FacultyID} class="btn btn-primary">
            Click to view{" "}
          </Link>
          <button onClick={deleteData}>Delete</button>
          
        </div>
      </div>
    </>
  );
}

export default FacById;
