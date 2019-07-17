import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Option from './Option';
import PeopleIcon from '../Icon/People';
import './select.scss';

class IconSelect extends Component {
  static Icons = {
    people: PeopleIcon
  };

  static propTypes = {
    icon: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
      })
    ).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
  }

  render() {
    const { icon, options } = this.props;
    const { expand } = this.state;
    const IconComponent = IconSelect.Icons[icon];
    return (
      <div className='icon-select_container'>
        <IconComponent
          onClick={this.handleClick}
          className='icon-select_icon' 
        />
        {
          expand && (
            <div className='icon-select_options' onClick={this.handleClick}>
              {
                options.map((props, i) => {
                  return (
                    <Option
                      key={i}
                      text={props.text}
                      onClick={props.onClick}
                    />
                  )
                })
              }
            </div>
          )
        }
        
      </div>
    );
  }
}

export default IconSelect;