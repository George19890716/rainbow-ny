import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    const { img, className, onClick } = this.props
    return (
      <img
        src={img}
        className={className}
        onClick={onClick}
        alt=''
      />
    );
  }
}

export default Image;