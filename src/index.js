import store from './stor'
import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Navbar from './pages/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
      
    </BrowserRouter>
  </React.StrictMode>
);


