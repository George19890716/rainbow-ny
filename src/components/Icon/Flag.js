import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FlagCN from './Flags/FlagCN';
import FlagUS from './Flags/FlagUS';

class Flag extends PureComponent {
  static Flags = {
    zh: FlagCN,
    en: FlagUS
  }

  static propTypes = {
    locale: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    className: '',
    onClick: null
  }

  render() {
    const { locale, className, onClick } = this.props;
    const TargetComponent = Flag.Flags[locale];
    const props = {};
    return (
      <TargetComponent 
        {...props}
        className={className}
        onClick={onClick}
      />
    );
  }
}

export default Flag;