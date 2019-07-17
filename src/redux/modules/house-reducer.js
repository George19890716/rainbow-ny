export const GET_LISTING_DETAIL = Symbol('@houseReducer/GET_LISTING_BY_ID');
export const GET_ALL_LISTING = Symbol('@houseReducer/GET_ALL_LISTING');
export const UPDATE_SEARCH_VALUE = Symbol('@houseReducer/UPDATE_SEARCH_VALUE');

export const initialState = {
  listing: null,
  listings: [],
  address: '',
  minPrice: 300000,
  maxPrice: 12000000
}

export default function listingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_LISTING_DETAIL: {
      return {
        ...state,
        listing: action.listing
      }
    }
    case GET_ALL_LISTING: {
      return {
        ...state,
        listings: action.listings
      }
    }
    case UPDATE_SEARCH_VALUE: {
      return {
        ...state,
        [action.key]: action.value
      }
    }
    default: return state;
  }
}