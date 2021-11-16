import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import DocList from './pages/DocList/DocList';
import Scan from './pages/Scan/Scan';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="scan" element={<Scan />} />
          <Route path="documents" element={<DocList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);
