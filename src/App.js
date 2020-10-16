import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        {/* Some Footer Component */}
      </div>
    </Router>
  );
}

export default App;
