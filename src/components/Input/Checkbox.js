import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.scss';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.checked);
  }

  render() {
    const { checked, children } = this.props;
    return (
      <div className='checkbox_container'>
        <input 
          type='checkbox' 
          className='checkbox_checkbox'
          checked={checked}
          onChange={this.handleChange}
        />
        <label className='checkbox_text'>
          {children}
        </label>
      </div>
    );
  }
}

export default Checkbox;