import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { ReactBingmaps } from 'react-bingmaps';
import Image from '../../components/Image/Image';
import TableItem from '../../components/Item/TableItem';
import Description from '../../components/Message/Description';
import BordLine from '../../components/Line/BordLine';
import Arrow from '../../components/Icon/Arrow';
import { initialListingDetail, getListingDetail } from '../../actions/house-action';
import { boroughs, neighborhoods, states } from '../../constants/location';
import { building_type } from '../../constants/other';
import './listing.scss';

class DetailContainer extends Component {
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
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const listings = this.props.listings;
    const { id } = this.props.match.params;
    if (listings.find(listing => listing._id === id)) {
      this.props.initialListingDetail(listings.find(listing => listing._id === id));
    } else {
      this.props.getListingDetail(id);
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { listing } = this.props;
    if (!listing) return (<div>1</div>);
    const { cover, address, aptNo, neighborhood, borough, zip, state, bed, bath, size, type, price } = listing;
    const { description: descriptions } = listing;
    const { 'sales-launch-date': salesLaunchDate, 'monthly-taxes': monthlyTaxes, 'monthly-common-charges': monthlyCommonCharges } = listing;
    const { 'highlights-amenities': highlightsAmenities, 'building-amenities': buildingAmenities, 'listing-amenities': listingAmenities, 'outdoor-amenities': outdoorAmenities } = listing;
    const details = {
      'sales-launch-date': salesLaunchDate,
      'monthly-taxes': monthlyTaxes,
      'monthly-common-charges': monthlyCommonCharges, 
      'highlights-amenity': highlightsAmenities,
      'building-amenity': buildingAmenities, 
      'listing-amenity': listingAmenities, 
      'outdoor-amenity': outdoorAmenities
    }
    return (
      <div className='detail_container'>
        <div className='detail_left'>
          <div className='detail_button'>
            <Arrow
              onClick={this.goBack}
              className='icon'
            />
            <FormattedMessage
              id='button.back'
            />
          </div>
          <div className='detail_address'>
            {address}{aptNo ? ',' : ''} {aptNo}
          </div>
          <div className='detail_normal'>
            <FormattedMessage id={neighborhoods[neighborhood]} />, <FormattedMessage id={boroughs[borough]} />, {zip}, <FormattedMessage id={states[state]} />
          </div>
          <div className='detail_normal'>
            <FormattedMessage id={building_type[type]} />
            &nbsp;&nbsp;<label className='divide-line'>|</label>&nbsp;&nbsp;
            {bed} <FormattedMessage id='constant.bedroom' />
            &nbsp;&nbsp;<label className='divide-line'>|</label>&nbsp;&nbsp;
            {bath} <FormattedMessage id='constant.bathroom' />
            &nbsp;&nbsp;<label className='divide-line'>|</label>&nbsp;&nbsp;
            {size} <FormattedMessage id='unit.ft²' />
          </div>
          <div className='detail_gallery'>
            <Image
              img={cover}
              className='img' 
            />
          </div>
          <div className='detail_additional'>
            <TableItem
              details={details}
            />
          </div>
        </div>

        <div className='detail_right'>
          <div className='detail_button'>
          </div>
          <div className='detail_address'>
          </div>
          <div className='detail_normal detail_normal-right'>
            <FormattedMessage id='constant.forSale' />: {price}
          </div>
          <div className='detail_normal detail_normal-right'>
            <FormattedMessage id='constant.estimatedPayment' />: 27495
          </div>
          <div className='detail_line'>
            <BordLine />
            <label className='detail_sub-title'>
              <FormattedMessage
                id='constant.map'
              />:
            </label>
          </div>
          <div className='detail_map'>
            <ReactBingmaps 
              bingmapKey='b3PWBwmvuSEUwkqZNosh~gx7MQGWoH8N5M-6A6djhvg~AjMFBFtDlvkA_k8MqKWaQedslN22gRY9BYPrnbiPWqy1X3MDc7amulp4Tdqexcd1' 
              center={[40.7245565, -74.00614917]}
              zoom={16}
              navigationBarMode = {"compact"}
            > 
            </ReactBingmaps>
          </div>
          <div className='detail_line'>
            <BordLine />
            <label className='detail_sub-title'>
              <FormattedMessage
                id='constant.description'
              />:
            </label>
          </div>
          <div className='detail_description'>
            <Description
              descriptions={descriptions}
              line={5}
            />
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps({ house }) {
  return {
    listing: house.listing,
    listings: house.listings
  }
}

export default connect(mapStateToProps, { initialListingDetail, getListingDetail })(DetailContainer);