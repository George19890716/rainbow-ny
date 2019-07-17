import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;