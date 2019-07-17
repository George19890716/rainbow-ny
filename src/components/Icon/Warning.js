import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Warning extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    className: '',
    onClick: null
  }

  render() {
    const { className, onClick } = this.props;
    return (
      <img
        src='./imgs/icons/svg/warning-icon.svg'
        className={className}
        onClick={onClick}
        alt='' 
      />
    );
  }
}

export default Warning;