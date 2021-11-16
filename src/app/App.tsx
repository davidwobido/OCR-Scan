import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Title from './Components/Title/Title';

function App(): JSX.Element {
  const [scan, setScan] = useState(false);
  const [docs, setDocs] = useState(true);

  const checkStatus = () => {
    setScan(true);
    setDocs(false);
  };

  const checkScan = () => {
    setScan(false);
    setDocs(true);
  };

  return (
    <div className="container">
      <Title text={scan ? 'OCR Scan' : 'Documents'} />
      <Outlet />
      <nav className="nav">
        <Link
          to="/scan"
          className={scan ? 'link__active' : 'link'}
          onClick={checkStatus}
        >
          Scan
        </Link>
        <Link
          to="/documents"
          className={docs ? 'link__active' : 'link'}
          onClick={checkScan}
        >
          Docs
        </Link>
      </nav>
    </div>
  );
}

export default App;
