import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientHeader from './ClientHeader';
import ClientList from './ClientList';
import DetailContainer from '../Listing/DetailContainer';
import './client.scss';

class ClientHome extends Component {
  render() {
    const { location: { pathname } } = this.props;
    return (
      <div className='client_container'>
        <ClientHeader
          pathname={pathname}
        />
        <div className='client-body_container'>
          <Switch>
            <Route path='/listings' component={ClientList} />
            <Route exact path='/detail/:id' component={DetailContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ClientHome;