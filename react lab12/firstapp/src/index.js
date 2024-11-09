import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {MyComp,Conditionalrender} from './comp'
import {MapDemo,Faculities,Student} from './alldemo'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {About, Layout} from './Layout'
import Contact from './Contact';
import Home from './Home';
import Professor from './Professor';
import Countprg from './Countprg';
import FacultyApi from './facultyApi';
import FacById from './FacById';
import Add from './add';
import Edit from './Edit';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

{/* <Countprg/> */}

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faculties" element={<Faculities/>}/>
        <Route path="/information" element={<Professor/>}/>
        <Route path="/facultyApi" element={<FacultyApi/>}/>
        <Route path="/:id" element={<FacById/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>

      </Route>
    </Routes>
 </BrowserRouter> 

  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();