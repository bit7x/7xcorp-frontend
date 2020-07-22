import React from 'react';
import './App.css';
import About from './About/About';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return (
      <div className="Home">
        <h2>Hello Home CI</h2>
      </div>
    );
  }

export default App;
