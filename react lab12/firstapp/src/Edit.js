import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://65f01c96da8c6584131acf73.mockapi.io/Faculties/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  },[]);
  console.log("data from getby id",data);
  
  function editData(){
    fetch("https://65f01c96da8c6584131acf73.mockapi.io/Faculties/"+ id,{
      method:"PUT",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(()=>{
      navigate('/');
    })
  }

  return (
    <div>
            <label>Faculty Name</label> <br />
      <input type="text" value={data.FacultyName}onChange={(e) => {
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
      <input type="button" value="Add Faculty" onClick={editData} />
    </div>
  );
};

export default Edit;
