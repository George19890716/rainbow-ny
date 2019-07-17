import { GET_LISTING_DETAIL, GET_ALL_LISTING, UPDATE_SEARCH_VALUE } from '../redux/modules/house-reducer';

export function initialListingDetail(listing) {
  return (dispatch) => {
    dispatch({
      type: GET_LISTING_DETAIL,
      listing 
    })
  }
}

export function getListingDetail(id) {
  return (dispatch) => {
    fetch(
      `/houses/${id}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    )
    .then(res => res.json())
    .then(response => {
      const { status, code } = response;
      if (status === 100 && code === 'CSL-LISTING-100') {
        const { data } = response;
        dispatch({
          type: GET_LISTING_DETAIL,
          listing: data 
        });
      }
    });
  }
}

export function getAllListing(callBack) {
  return (dispatch) => {
    fetch(
      '/houses',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    )
    .then(res => res.json())
    .then(response => {
      const { status, code } = response;
      if (status === 100 && code === 'CSL-LISTING-100') {
        const { data } = response;
        dispatch({
          type: GET_ALL_LISTING,
          listings: data 
        });
        callBack();
      }
    });
  }
}

export function updateSearchValue(key, value) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SEARCH_VALUE,
      key,
      value,
    });
  }
}