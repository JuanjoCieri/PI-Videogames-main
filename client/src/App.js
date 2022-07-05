import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Form from './components/Form'
import Details from './components/Details'
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path={'/'} component={LandingPage}></Route>
          <Route exact path={'/home'} component={Home}></Route>
          <Route exact path={'/form'} component={Form}></Route>
          <Route exact path={'/home/:id'} component={Details}></Route>
          <Route path={'*'} component={Error} />
        </Switch>
      </div>
     </BrowserRouter> 
  );
}

export default App;
