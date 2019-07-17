import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Flag from '../Icon/Flag';
import Arrow from '../Icon/Arrow';
import LanguageOption from './LanguageOption';
import './select.scss';

class LanguageSelect extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        locale: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        selected: PropTypes.bool,
        onClick: PropTypes.func.isRequired
      })
    ).isRequired
  }

  constructor (props) {
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
    const { locale, options } = this.props;
    const { expand } = this.state;
    return (
      <div className='language-select_container'>
        <div className='language-select_selector' onClick={this.handleClick}>
          <Flag
            locale={locale}
            className='language-select_flag'
          />
          <span className='language-select_language'>
            <FormattedMessage
              id='language'
            />
          </span>
          <Arrow
            className='language-select_icon'
            animation='0.5s'
            rotation={expand ? 90: -90}
          />
        </div>
        <div className={classNames('language-select_options', {'select_hidden': !expand})}>
          {
            options.map(props => {
              return (
                <LanguageOption
                  key={props.text}
                  locale={props.locale}
                  text={props.text}
                  selected={props.selected}
                  onClick={props.onClick}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default LanguageSelect;