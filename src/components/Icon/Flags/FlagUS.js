import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FlagUS extends PureComponent {
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
        src='./imgs/icons/flags/us.png'
        className={className}
        onClick={onClick}
        alt=''
      />
    );
  }
}

export default FlagUS;