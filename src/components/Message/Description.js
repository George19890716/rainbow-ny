import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Arrow from '../Icon/Arrow';
import './message.scss';

class Description extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expand: false,
      clientHeight: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick() {
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
  }

  render() {
    const { descriptions, line } = this.props;
    const { expand } = this.state;
    const style = expand ? null : {
      height: `${15 * line}px`,
      overflowY: 'hidden',
      transition: 'height 0.2s linear'
    }
    return descriptions ? (
      <div className='description_container' >
        <div ref="descriptionContent" style={style}>
        {
          descriptions.map((phase, i) => {
            return (
              <div key={i} className='description_phase'>
                {phase}
              </div>
            )
          })
        }
        </div>
        <div className='description_button'>
          <a href='javascript:;' onClick={this.handleClick}>
            <FormattedMessage
              id={expand ? 'button.hide' : 'button.show'}
            />
          </a>
          <Arrow
            className='description_icon-box'
            animation='0.5s'
            rotation={expand ? 90: -90}
            onClick={this.handleClick}
          />
        </div>
      </div>
    ) : null;
  }
}

export default Description;