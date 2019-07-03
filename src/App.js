import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './containers/About';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
