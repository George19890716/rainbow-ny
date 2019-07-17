import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './client.scss';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';
import { price_options } from '../../constants/other';
import { updateSearchValue } from '../../actions/house-action';


class ClientSearch extends Component {
  static propTypes = {
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    updateSearchValue: PropTypes.func.isRequired
  }

  render() {
    const { listings, address, minPrice, maxPrice, updateSearchValue } = this.props;
    const minPriceOptions = price_options.filter(option => option.value <= maxPrice);
    const maxPriceOptions = price_options.filter(option => option.value >= minPrice);

    const searchListings = listings.filter(house =>
      !!`${house.address}, ${house.aptNo}`.match(new RegExp(address, 'i')) 
      && house.price >= minPrice 
      && house.price <= maxPrice
    );

    const hints = [];
    searchListings.forEach(house => {
      hints.push(`${house.address}, ${house.aptNo}`);
    });
    
    return (
      <div className='client-search_container'>
        <div className='client-search_tr'>
          <div className='client-search_td'>
            <FormattedMessage
              id='constant.address'
            />
          </div>
        </div>
        <div className='client-search_tr'>
          <div className='client-search_td'>
            <Input
              type='text'
              value={address}
              onChange={value => updateSearchValue('address', value)}
              placeholder='constant.address'
              hints={hints.slice(0, 5)}
            />
          </div>
        </div>

        <div className='client-search_tr'>
          <div className='client-search_td'>
            <FormattedMessage
              id='constant.minPrice'
            />
          </div>
          <div className='client-search_td'>
            <FormattedMessage
              id='constant.maxPrice'
            />
          </div>
        </div>

        <div className='client-search_tr'>
          <div className='client-search_td'>
            <Select 
              className='selector'
              value={minPrice}
              options={minPriceOptions}
              onChange={value => updateSearchValue('minPrice', value)}
            />
          </div>
          <div className='client-search_td'>
            <Select 
              className='selector' 
              value={maxPrice} 
              options={maxPriceOptions}
              onChange={value => updateSearchValue('maxPrice', value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps({ house }) {
  return {
    listings: house.listings,
    address: house.className,
    minPrice: house.minPrice, 
    maxPrice: house.maxPrice
  }
}

export default connect(mapStateToProps, { updateSearchValue })(ClientSearch);