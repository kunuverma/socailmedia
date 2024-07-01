// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './component/SignIn';
import Followers from './component/Followers';
import Profile from "./component/Profile";
import Front from './component/Front';

const App = () => {
  return (
   
    <div>
    
    <Router>
     <Routes>
        <Route path='/' element={<Front/>}/>
       <Route path="/signin" element={<SignIn/>} />
       <Route path="/followers" element={<Followers />} />
       <Route path='/profile' element={<Profile/>}/>
     </Routes>
   </Router>
   
   </div>
   
    
   
    // <div>
    //   <h1 className='text-4xl font-bold text-green-500'>hello gulshan </h1>
    // </div>
  );
};

export default App;
