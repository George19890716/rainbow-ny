import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './input.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
    
  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { title, value, options } = this.props;
    return (
      <div className='input_container'>
        {
          !!title && (
            <label className='input_title'>
              {title}
            </label>
          )
        }
        <select 
          className='input_normal' 
          value={value}
          onChange={this.handleChange}
        >
          {
            options.length > 0 && options.map(option => {
              return (
                <option
                  key={option.value}
                  value={option.value}
                  className='select_option'
                >
                  {option.text}
                </option>
              )
            })
          }
        </select>
      </div>
    );
  }
}

export default Select;