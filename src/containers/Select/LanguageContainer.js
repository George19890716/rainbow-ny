import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LanguageSelect from '../../components/Select/LanguageSelect';
import { selectEn, selectZh } from '../../actions/system-action';

// @connect(
//   system => ({ locale: system.locale }),
//   { selectEn, selectZh }
// )

class LanguageContainer extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    selectEn: PropTypes.func.isRequired,
    selectZh: PropTypes.func.isRequired
  }

  render() {
    let { locale } = this.props;
    const { selectEn, selectZh } = this.props;
    if (!locale) {
      locale = 'zh';
    }
    const options = [
      {
        locale: 'en',
        text: 'ENG (US)',
        onClick: selectEn,
        selected: locale === 'en'
      },
      {
        locale: 'zh',
        text: '简体中文',
        onClick: selectZh,
        selected: locale === 'zh'
      }
    ]
    return (
      <LanguageSelect
        locale={locale}
        options={options}
      />
    );
  }
}

// export default LanguageContainer;

function mapStateToProps({ system }) {
  return {
    locale: system.locale
  }
}

export default connect(mapStateToProps, { selectEn, selectZh })(LanguageContainer);