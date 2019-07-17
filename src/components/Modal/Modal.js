import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func
  }

  render() {
    const { children, onClose } = this.props;
    return (
      <div className='modal_container' onClick={onClose}>
        {children}
      </div>
    );
  }
}

export default Modal;