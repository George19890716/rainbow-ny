import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './select.scss';

class Option extends Component {
  static propTypes = {
    text: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }
  render() {
    const { text, onClick } = this.props;
    return (
      <div className='option_container' onClick={onClick}>
        <span className='option_text'>
          {text}
        </span>
      </div>
    );
  }
}

export default Option;