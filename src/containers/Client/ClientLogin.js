import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './client.scss';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Input/Checkbox';
import Button from '../../components/Button/Button';
import Message from '../../components/Message/Message';
import { initialLogin, userLogin, updateValue, clearAllData } from '../../actions/system-action';
import Session from '../../services/Session';

class ClientLogin extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    accessSave: PropTypes.bool.isRequired,
    accessError: PropTypes.object.isRequired,
    userLogin: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired,
    clearAllData: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.initialLogin();
  }

  componentWillUnmount() {
    this.props.clearAllData();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.userLogin();
  }

  render() {
    const { username, password, accessSave, accessError, updateValue, clearAllData } = this.props;
    return (
      <div className='client-login_container'>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='client-login_title'>
            <FormattedMessage
              id='client.login.title'
            />
          </div>
          <div className='client-login_input-div'>
            {
              accessError.access && (
                <Message 
                  icon='warning'
                  contents={[<FormattedMessage id={accessError.access} />]}
                  bg='yellow'
                />
              )
            }
            <Input
                type='text'
                title={<FormattedMessage id='client.login.username' />}
                icon='people'
                placeholder='client.placeholder.login.username'
                value={username}
                onChange={value => updateValue('username', value)}
                error={accessError.username}
                required={true}
            />
            <Input
                type='password'
                title={<FormattedMessage id='client.login.password' />}
                icon='lock'
                value={password}
                onChange={value => updateValue('password', value)}
                placeholder='client.placeholder.login.password'
                error={accessError.password}
                required={true}
            />
            <Checkbox
              checked={accessSave}
              onChange={value => updateValue('accessSave', value)}
            >
              <FormattedMessage
                id='client.login.remember'
              />
            </Checkbox>
          </div>
          <div className='client-login_button-div'>
            <div className='button'>
              <Button
                type='submit'
              >
                <FormattedMessage
                  id='button.login'
                />
              </Button>
            </div>
            <div className='button'>
              <Button
                type='button'
                onClick={clearAllData}
              >
                <FormattedMessage
                  id='button.cancel'
                />
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export function mapStateToProps({ system }) {
  return {
    username: system.username,
    password: system.password,
    accessSave: system.accessSave,
    accessError: system.accessError,
    isSuccess: system.isSuccess
  }
}

export default connect(mapStateToProps, { initialLogin, userLogin, updateValue, clearAllData })(ClientLogin);