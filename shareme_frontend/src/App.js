import React, { useEffect } from 'react'
import { userEffect } from 'react';
import { gapi } from 'gapi-script';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { fetchUser } from './utils/fetchUser';

const clientId = "1075381234304-uv029q27si9dfpkos257lgnednglnci6.apps.googleusercontent.com"
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const start = () => {
      const user = fetchUser();
      if(!user) navigate('/login');
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start);
    
  });
  return (
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  )
}

export default App