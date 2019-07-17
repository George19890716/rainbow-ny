import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Arrow extends PureComponent {
  static propTypes = {
    animation: PropTypes.string,
    rotation: PropTypes.number,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    animation: '',
    rotation: 0,
    className: '',
    onClick: null
  }

  render() {
    const { animation, rotation, className, onClick } = this.props;

    const style = {
      transform: `rotate(${rotation}deg)`,
      transition: `transform ${animation}`
    };

    return (
      <img
        src='./imgs/icons/arrow-icon.png'
        style={style}
        className={className}
        onClick={onClick}
        alt=''
      />
    );
  }
}

export default Arrow;