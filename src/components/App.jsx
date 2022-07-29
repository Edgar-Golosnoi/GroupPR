import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Auth from './auth/Auth';
import Start from './auth/Start';
import Navbar from './navbar/Navbar';
import Checklist from './checklist/Checklist';
import Lists from './lists/Lists';


export default function App({usernameSession}) {
  const location = useLocation();
  const [authUser, setAuthUser] = useState(usernameSession);
  
  return (
    <div className="container">
      <Navbar authUser={authUser} />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home"/>
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/user/auth" element={<Auth setAuthUser={setAuthUser}/>} />
        <Route path="/lists" element={<Lists authUser={authUser}/>}/>
      </Routes>
    </div>
  );
}
