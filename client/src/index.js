import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { AuthContextProvider } from './utils/context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);

