import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import Button from '../Button/Button';
import { boroughs, neighborhoods, states } from '../../constants/location';
import { building_type } from '../../constants/other';
import './item.scss';

class ListingItem extends Component {
  static propTypes = {
    listing: PropTypes.shape({
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
    })
  }

  static defaultProps = {
    cover: '',
    aptNo: '',
    bed: 0,
    bath: 0,
    size: 0,
    type: ''
  }

  render() {
    const { listing: { _id, cover, price, address, aptNo, borough, neighborhood, zip, state, bed, bath, size, type } } = this.props;
    return (
      <div className='listing-item_container'>
        <div className='listing-item_img'>
          <div className='img-box'>
            <Image
              img={cover}
              className='img' 
            />
          </div>
        </div>

        <div className='listing-item_content'>
          <div className='price'>
            <FormattedMessage id='constant.forSale' />: {price}
          </div>
          <div className='detail address'>
            {address}{aptNo ? ',' : ''} {aptNo}
          </div>
          <div className='detail area'>
            <FormattedMessage id={neighborhoods[neighborhood]} />, <FormattedMessage id={boroughs[borough]} />, {zip}, <FormattedMessage id={states[state]} />
          </div>
          <div className='detail normal'>
            <FormattedMessage id={building_type[type]} />
            &nbsp;&nbsp;<label className='divide-line'>|</label>&nbsp;&nbsp;
            {bed} <FormattedMessage id='constant.bedroom' />
            &nbsp;&nbsp;<label className='divide-line'>|</label>&nbsp;&nbsp;
            {bath} <FormattedMessage id='constant.bathroom' />
            &nbsp;&nbsp;<label className='divide-line'>|</label>&nbsp;&nbsp;
            {
              size !== -1 ? (
                <Fragment>
                  {size} <FormattedMessage id='unit.ft²' />
                </Fragment>
              ) : (
                <FormattedMessage id='constant.unknown' />
              )
            } 
          </div>
          <div className='button-div'>
            <div className='button'>
              <Link to={`/detail/${_id}`} replace>
                <Button
                  type='button'
                  reverse={true}
                  square={true}
                >
                  <FormattedMessage
                    id='button.more'
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingItem;