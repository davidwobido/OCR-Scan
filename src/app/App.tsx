import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div>
      <Outlet />
      <nav>
        <Link to="/scan" className="link">
          Scan
        </Link>
        <Link to="/documents" className="link">
          Docs
        </Link>
      </nav>
    </div>
  );
}

export default App;
