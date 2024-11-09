import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Layout(){

    return(
        <>
        <button><Link to="/">home</Link> </button>
        <button><Link to="/contact">contact us</Link></button>
        <button><Link to="/information">information</Link></button>
        <button><Link to="/faculties">faculties</Link></button>
        <button><Link to="/professor">professor</Link></button>
        <button><Link to="/facultyApi">FacultyApi</Link></button>
        <button><Link to="/Add">Add</Link></button>
        
        <Outlet/>
        </>
    )
    
}