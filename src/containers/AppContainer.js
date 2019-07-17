import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ClientHome from './Client/ClientHome';
import TestContainer from './TestContainer';

class AppContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={ClientHome} />
        {/* <Route path='/' component={TestContainer} /> */}
      </Switch>
    );
  }
}

export default AppContainer;