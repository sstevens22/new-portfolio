import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/portfolio' component={Portfolio} />
       <Route path='/resume' component={Resume} />
       <Route path='/contact' component={Contact} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
