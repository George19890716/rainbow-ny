import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './pagination.scss';

class Pagination extends Component {
  static propTypes = {
    total: PropTypes.number,
    limit: PropTypes.number,
    neighborhood: PropTypes.number,
    onPageChanged: PropTypes.func
  }

  static defaultProps = {
    total: 0,
    limit: 10,
    neighborhood: 3,
    onPageChanged: null
  }

  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 1,
    };
    this.goToPage = this.goToPage.bind(this);
    this.getPagination = this.getPagination.bind(this);
    this.getPaginationBlock = this.getPaginationBlock.bind(this);
  }

  _Page = (number, onClick, selected) => {
    return (
      <button 
        key={number}
        onClick={onClick}
        className={classNames('pagination_button', {'pagination_selected': selected})}
      >
        <label>
          {number}
        </label>
      </button>
    );
  }

  _Left = (type, onClick, key) => {
    return (
      <button
        key={`${type}${key}`}
        onClick={onClick} 
        className={classNames('pagination_arrow', {'pagination_arrow-normal': type === 'normal'})}
      >
        <img 
          src={type === 'normal' ? './imgs/icons/triangle-icon.png' : './imgs/icons/double-triangle-icon.png'}
          className='img'
          alt=''
        />
      </button>
    )
  }

  _Right = (type, onClick, key) => {
    return (
      <button
        key={`${type}${key}`}
        onClick={onClick} 
        className={classNames('pagination_arrow', {'pagination_arrow-normal': type === 'normal'})}
      >
        <img 
          src={type === 'normal' ? './imgs/icons/triangle-icon.png' : './imgs/icons/double-triangle-icon.png'}
          className='img img-reverse'
          alt=''
        />
      </button>
    )
  }

  componentDidMount() {
  }

  goToPage(currentPage) {
    this.setState({
      currentPage
      }, () => {
        this.props.onPageChanged(currentPage);
      }
    );
  }

  getPagination(currentPage, pageNum) {
    const { neighborhood } = this.props;
    let start = 1, end = 1;
    
    const left = [
      this._Left('normal', this.goToPage.bind(this, currentPage - 1), currentPage)
    ];

    const right = [
      this._Right('normal', this.goToPage.bind(this, currentPage + 1), currentPage)
    ];

    if (pageNum <= 2 * neighborhood + 3) {
      start = 1;
      end = pageNum;
      return this.getPaginationBlock(start, end, currentPage);
    }
    if (currentPage - neighborhood <= 2) {
      start = 1;
      end = currentPage === 1 ? currentPage + 2 * neighborhood : currentPage + neighborhood;
      return [...this.getPaginationBlock(start, end, currentPage), right, this._Page(pageNum, this.goToPage.bind(this, pageNum), false)]
    }
    if (currentPage + neighborhood >= pageNum -1) {
      start = currentPage === pageNum ? currentPage - 2 * neighborhood : currentPage - neighborhood;
      end = pageNum;
      return [this._Page(1, this.goToPage.bind(this, 1), false), left, ...this.getPaginationBlock(start, end, currentPage)]
    }
    start = currentPage - neighborhood;
    end = currentPage + neighborhood;
    return [this._Page(1, this.goToPage.bind(this, 1), false), left, ...this.getPaginationBlock(start, end, currentPage), right, this._Page(pageNum, this.goToPage.bind(this, pageNum), false)]
  }

  getPaginationBlock(start, end, currentPage) {
    const paginationBlock = [];
    for (let i = start; i <= end; i++) {
      paginationBlock.push(this._Page(i, this.goToPage.bind(this, i), currentPage === i));
    }
    return paginationBlock;
  }

  render() {
    const { total, limit } = this.props;
    const { currentPage } = this.state;
    const pageNum = Math.ceil(total / limit );
    const page = currentPage > pageNum ? 1 : currentPage;
    const pagination = this.getPagination(page, pageNum);
    return (
      <Fragment>
        {pagination}
      </Fragment>
    );
  }
}

export default Pagination;