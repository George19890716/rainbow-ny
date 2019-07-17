import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './client.scss';
import ClientLogin from './ClientLogin';
import Modal from '../../components/Modal/Modal';
import Cross from '../../components/Icon/Cross';

class ClientAccess extends Component {
  render() {
    const { show, onClose } = this.props;
    if (!show) return null;

    return (
      <Modal>
        <div className='client-access_container'>
          <div className='client-access_bar'>
            <Cross
              className='cross-icon'
              onClick={onClose}
            />
          </div>
          <div className='client-access_container'>
            <ClientLogin />
          </div>
        </div>
      </Modal>
    );
  }
}

export default ClientAccess;