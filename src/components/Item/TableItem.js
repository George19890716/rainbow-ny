import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { detail_title } from '../../constants/other';
import './item.scss';

class TableItem extends Component {
  render() {
    const { details } = this.props;
    const detailsBlock = [];
    Object.keys(details).map((key, i) => {
      const data = [];
      if (details[key] instanceof Array) {
        const tmp = [];
        details[key].map((record, j) => {
          tmp.push(
            <label key={j}>
              {record}
            </label>
          );
        });
        data.push(
          <div key={i}>
            {tmp}
          </div>
        );
      } else {
        data.push(
          <div key={i}>
            {details[key]}
          </div>
        );
      }
      detailsBlock.push(
        <div className='table-item_tr' key={key}>
          <div className='table-item_td-left' key={key}>
            {<FormattedMessage id={detail_title[key]} />}
          </div>
          <div className='table-item_td-right'>
            {data}
          </div>
        </div>
      )
    });
    return details ? (
      <div className='table-item_container'>
        {detailsBlock}
      </div>
    ) : null;
  }
}

export default TableItem;