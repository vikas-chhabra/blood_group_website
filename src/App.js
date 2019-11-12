import React, { Component } from 'react';
import Main from './components/Main';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route path={`${process.env.PUBLIC_URL}/`} component={Main}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
