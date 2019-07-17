import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './link.scss';

class LinkItem extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool
  }

  render() {
    const { url, children, isSelected } = this.props;
    return (
      <Link to={url} replace>
        <button className={classNames('link-item_button', {'link-item_reverse': isSelected})}>
          {children}
        </button>
      </Link>
    );
  }
}

export default LinkItem;