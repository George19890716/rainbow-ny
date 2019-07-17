import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './client.scss';
import ClientNavigation from '../../components/Navigation/ClientNavigation';
import LanguageContainer from '../Select/LanguageContainer';
import UserMenuContainer from '../Select/UserMenuContainer';
import ClientAccess from './ClientAccess';
import DashLine from '../../components/Line/DashLine';
import { showAccessModal, hideAccessModal } from '../../actions/system-action';

class ClientHeader extends Component {
  constructor(props) {
    super(props);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openRegModal = this.openRegModal.bind(this);
  }

  openLoginModal(e) {
    this.props.showAccessModal();
    e.preventDefault();
  }

  openRegModal(e) {
    e.preventDefault();
  }

  render () {
    const { pathname, accessModal, authenticated, hideAccessModal } = this.props;
    //For Navigation
    const links = [
      {
        url: '/home',
        isSelected: pathname === '/home',
        text: (
          <FormattedMessage
            id='client.link.home'
          />
          )
        },
        {
          url: '/commerical',
          isSelected: pathname === '/commerical',
          text: (
            <FormattedMessage
              id='client.link.commercial'
            />
          )
        },
        {
          url: '/listings',
          isSelected: pathname === '/listings',
          text: (
            <FormattedMessage
              id='client.link.information'
            />
          )
        },
        {
          url: '/news',
          isSelected: pathname === '/news',
          text: (
            <FormattedMessage
              id='client.link.news'
            />
          )
        },
        {
          url: '/contact-us',
          isSelected: pathname === '/contact-us',
          text: (
            <FormattedMessage
              id='client.link.contactUs'
            />
          )
        }
      ];
    return (
      <div className='client-header_container'>
        <div className='client-header_text-box'>
          <span className='title'>
            Rainbow New York
          </span>
        </div>
        <div className='client-header_text-box'>
          <span className='introduction'>
            <FormattedMessage 
              id='client.header.title'
            />
          </span>
        </div>
        <div className='client-header_language'>
          <LanguageContainer />
        </div>
        {
          !!authenticated && (
            <div className='client-header_bar'>
              <label className='signed'>
                Hi, {authenticated['authenticated']['data']['f-name']}
              </label>
            </div>
          )
        }
        {
          !!authenticated && (
            <div className='client-header_menu-box'>
              <UserMenuContainer className='icon'/>
            </div>
          )
        }   
        {
          !authenticated && (
            <div className='client-header_bar'>
              <a href='login' onClick={this.openLoginModal}>
                <FormattedMessage
                  id='client.link.login'
                 />
              </a>
              &nbsp;/&nbsp;
              <a href='registration' onClick={this.openRegModal}>
              <FormattedMessage
                id='client.link.registration'
              />
          </a>
        </div>
          )
        }
        <div className='client-header_navigation'>
          <ClientNavigation
            links={links}
          />
        </div>
        <div className='client-header_line'>
          <DashLine />
        </div>
        <ClientAccess
          show={accessModal}
          onClose={hideAccessModal}
        />
      </div>
    );
  }
}

export function mapStateToProps({ system }) {
  return {
    accessModal: system.accessModal,
    authenticated: system.authenticated
  }
}

export default connect(mapStateToProps, { showAccessModal, hideAccessModal })(ClientHeader);