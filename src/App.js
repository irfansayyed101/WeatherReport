import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import history from './common/history';
import Header from './common/header';
import LandingPage from './common/LandingPage';
import Loading from './components/Loading';
import WeatherContainer from './container/WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
          <LandingPage/>
          <Router history={history}>
            <Route exact path="/" component={Loading} />
            <Route exact path="/Weather" component={WeatherContainer} />
          </Router>
      </div>
    );
  }
}

export default App;
