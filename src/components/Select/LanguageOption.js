import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './select.scss';
import Flag from '../Icon/Flag';
import Tick from '../Icon/Tick';

class LanguageOption extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    selected: false
  }

  render() {
    const { locale, text, selected, onClick } = this.props;
    return (
      <div className='language-option_container' onClick={onClick}>
        <Flag 
          locale={locale}
          className='language-option_flag' 
        />
        <span className='language-option_text'>
          {text}
        </span>
        <Tick
          className={classNames('language-option_icon', {'select_hidden': !selected})}
        />
      </div>
    );
  }
}

export default LanguageOption;