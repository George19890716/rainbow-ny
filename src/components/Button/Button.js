import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['submit', 'button']),
    onClick: PropTypes.func,
    square: PropTypes.bool,
    reverse: PropTypes.bool
  }

  static defaultProps = {
    type: 'button',
    square: false,
    reverse: false,
    onClick: null
  }

  render() {
    const { children, type, square, onClick, reverse } = this.props;
    return (
      <button
        type={type}
        className={classNames('button_normal', {'button_raduis': !square, 'button_reverse': reverse})}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;