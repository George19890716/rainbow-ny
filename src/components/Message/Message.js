import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './message.scss';
import WarningIcon from '../Icon/Warning';

class Message extends Component {
  static Icons = {
    warning: WarningIcon
  }

  static propTypes = {
    icon: PropTypes.oneOf(['warning']),
    contents: PropTypes.arrayOf(
      PropTypes.node
    ),
    bg: PropTypes.oneOf(['yellow'])
  }

  render() {
    const { icon, bg, contents } = this.props;
    
    const IconComponent = Message.Icons[icon];
    return (
      <div className={classNames('message_container', {'message_yellow' : bg === 'yellow'})}>
        {
          icon && (
            <IconComponent
              className='message_icon'
            />
          )
        }
        {
          contents.map((content, i) => {
            return (
              <label key={i} className={classNames('message_text', {'message_text-no-icon' : !icon})}>
                {content}
              </label>
            )
          })
        }
      </div>
    );
  }
}

export default Message;