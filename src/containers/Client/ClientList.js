import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './client.scss';
import ClientSearch from './ClientSearch';
import ListingItem from '../../components/Item/ListingItem';
import DashLine from '../../components/Line/DashLine';
import Pagination from '../../components/Pagination/Pagination';
import { getAllListing } from '../../actions/house-action';
import { Switch, Route } from 'react-router-dom';
import DetailContainer from '../Listing/DetailContainer';

class ClientList extends Component {
  static propTypes = {
    listings: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        cover: PropTypes.string,
        price: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
        aptNo: PropTypes.string,
        borough: PropTypes.string.isRequired,
        neighborhood: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        bed: PropTypes.number,
        bath: PropTypes.number,
        size: PropTypes.number,
        type: PropTypes.string
      }).isRequired
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      limit: 5,
      currentPage: 1,
    }
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount() {
    this.props.getAllListing(this.onPageChanged.bind(this, 1));
  }

  onPageChanged(currentPage) {
    this.setState({
      currentPage
    });
  }

  render() {
    const { limit, currentPage } = this.state;
    const { listings, minPrice, maxPrice, address } = this.props;
    const searchListings = listings.filter(house =>
      !!`${house.address}, ${house.aptNo}`.match(new RegExp(address, 'i')) && house.price >= minPrice && house.price <= maxPrice
    );
    const length = searchListings.length;
    const offset = (currentPage - 1) * limit >= length ? 0 : (currentPage - 1) * limit;
    const page = (currentPage - 1) * limit >= length ? 1 : length;
    
    const displayListing = searchListings.slice(offset, offset + limit);
    return (
      <div className='client-listing_container'>
        <Switch>
          <Route exact path='/detail/:id' component={DetailContainer} />
        </Switch>
        <div className='client-listing_search'>
          <ClientSearch />
        </div>
        <div className='client-listing_list'>
          {
            displayListing.map(listing => {
              return (
                <Fragment key={listing._id}>
                  <DashLine />
                  <ListingItem
                    key={listing._id}
                    listing={listing}
                  />
                </Fragment>
              )
            })
          }
          {
            displayListing.length > 0 && (
              <DashLine />
            )
          }
        </div>
        <div className='client-listing_pagination'>
          <Pagination
            total={length}
            limit={limit}
            neighborhood={1}
            onPageChanged={this.onPageChanged}
          />
          <div className='records'>
            <FormattedMessage id='constant.total' />
            &nbsp;{length}&nbsp;
            <FormattedMessage id='constant.listing' /> | <FormattedMessage id='constant.page' />
            &nbsp;{page} / {Math.ceil(length / limit)}
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps({ house }) {
  return {
    listings: house.listings,
    address: house.address,
    minPrice: house.minPrice, 
    maxPrice: house.maxPrice
  }
}

export default connect(mapStateToProps, { getAllListing })(ClientList);