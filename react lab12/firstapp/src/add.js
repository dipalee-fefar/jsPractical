import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Add = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ FacultyName: "" });

function sendData(){
    fetch("https://65f01c96da8c6584131acf73.mockapi.io/Faculties", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      navigate('/facultyApi');
    }) 
  }

  return (
    <div>
            <label>Faculty Name</label> <br />
      <input type="text" onChange={(e) => {
        setData({ ...data, FacultyName: e.target.value });
      }} />
      <br />

      <label>Faculty Image</label> <br />
      <input type="text" onChange={(e) => {
        setData({ ...data, FacultyImage: e.target.value });
      }} />
      <br />

      <label>Faculty Experience</label> <br />
      <input type="text" onChange={(e) => {
        setData({ ...data, FacultyExp: e.target.value });
      }} />
      <br />
      <input type="button" value="Add Faculty" onClick={sendData} />
    </div>
  )
}

export default Add
