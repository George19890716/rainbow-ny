import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import IconSelect from '../../components/Select/IconSelect';
import { userLogout } from '../../actions/system-action';

class UserMenuContainer extends Component {
  constructor(props) {
    super(props)
    this.click1 = this.click1.bind(this);
  }

  click1() {}

  render() {
    const { userLogout } = this.props;
    const options = [
      {
        text: <FormattedMessage id='client.link.profile' />,
        onClick: this.click1
      },
      {
        text: <FormattedMessage id='client.link.setting' />,
        onClick: this.click1
      },
      {
        text: <FormattedMessage id='client.link.logout' />,
        onClick: userLogout
      }
    ];
    return (
      <IconSelect
        icon='people'
        options={options} 
      />
    );
  }
}

export function mapStateToProps({ system }) {
  return {}
}

export default connect(mapStateToProps, { userLogout })(UserMenuContainer);