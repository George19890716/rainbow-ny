import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import Wrapper from './Wrapper';
import AppContainer from './containers/AppContainer';

class RootContainer extends Component {
  render () {
    return (
      <Wrapper>
        {/* <BrowserRouter> */}
        <HashRouter>
          <Route path='/' component={AppContainer} />
        </HashRouter>
        {/* </BrowserRouter> */}
      </Wrapper>
    );
  }
}

export default RootContainer;