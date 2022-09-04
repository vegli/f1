import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';


class App extends Component{
  render(){
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/details" component={Details}/>
          <Route component={NotFoundPage}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
