import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css';


ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);