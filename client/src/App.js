import React from 'react';
import './App.css';
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About'
import Transcriptor from './components/transcription/Transcriptor'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid px-4" id="main">
        <Router>
          <Route exact path="/" component={Transcriptor} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    </div>
  );
}

export default App;
