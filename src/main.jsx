import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import Planet from './pages/planet';
import Login from './pages/login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="planet" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
