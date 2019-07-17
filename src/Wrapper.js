import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from './locale/en_US';
import zh_CN from './locale/zh_CN';

addLocaleData(en);
addLocaleData(zh);

const messages = {
  en: en_US,
  zh: zh_CN
}

class Wrapper extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  render() {
    let { locale } = this.props;
    const { children } = this.props;
    if (!locale) {
      locale = 'zh'
    }
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    );
  }
}

function mapStateToProps({ system }) {
  return {
    locale: system.locale
  }
}

export default connect(mapStateToProps)(Wrapper);