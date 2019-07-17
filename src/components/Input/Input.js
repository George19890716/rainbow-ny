import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import './input.scss';
import Lock from '../Icon/Lock';
import People from '../Icon/People';

class Input extends Component {
  static Icons = {
    lock: Lock,
    people: People
  }

  static propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    title: PropTypes.node,
    icon: PropTypes.oneOf(['lock', 'people']),
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    error: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { type, title, icon, placeholder, value, hints, required, error } = this.props;
    const IconComponent = Input.Icons[icon];
    return (
      <div className='input_container'>
        {
          !!title && (
            <label className='input_title'>
              {title}
            </label>
          )
        }
        {
          !!icon && (
            <div className={classNames('input_icon-box', {'input_with-title': !!title})}>
              <IconComponent
                className='input_icon'
              />
            </div>
          )
        }
        <FormattedMessage id={placeholder}>
          {msg => (<input
                    type={type}
                    className={classNames('input_normal', {'input_with-icon': !!icon, 'input_error': !!error})}
                    placeholder={msg}
                    value={value}
                    list='hints'
                    onChange={this.handleChange}
                    required={required} 
                  />)
          }
        </FormattedMessage>
        <datalist id='hints'>
          {
            !!hints && hints.map(hint => {
              return (
                <option 
                  key={hint}
                  label={hint}
                  value={hint} 
                />
              )
            }) 
          }
        </datalist>
        {
          !!error && (
            <div className='input_error-msg'>
              * <FormattedMessage
                id={error}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default Input;