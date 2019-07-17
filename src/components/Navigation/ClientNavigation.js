import React, { Component } from 'react';
import './navigation.scss';
import LinkItem from '../Link/LinkItem';

class ClientNavigation extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className='client-navigation_container'>
        {
          links.map(props => {
            return (
              <div key={props.url} className='client-navigation_link-item'>
                <LinkItem
                  url={props.url}
                  isSelected={props.isSelected}
                >
                  {props.text}
                </LinkItem>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ClientNavigation;