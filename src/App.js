import React from 'react';
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import JumbotronLanding from "./components/JumbotronLanding/JumbotronLanding";
import './App.css';

function App() {
  return (
    <header className="masthead">
      <div className="container h-100 d-flex justify-content-center">
        <JumbotronLanding />
      </div>
    </header>
  );
}

export default App;
