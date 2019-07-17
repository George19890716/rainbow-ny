import Session from '../../services/Session';

export const CHANGE_LANGUAGE = Symbol('@systemReducer/CHANGE_LANGUAGE');
export const INITIAL_LOGIN = Symbol('@systemReducer/INITIAL_LOGIN');
export const USER_LOGIN = Symbol('@systemReducer/USER_LOGIN');
export const USER_LOGOUT = Symbol('@systemReducer/USER_LOGOUT');
export const INVALIDATE_USER_LOGIN_DATA = Symbol('@systemReducer/INVALIDATE_USER_LOGIN_DATA');
export const UPDATE_USER_LOGIN_DATA = Symbol('@systemReducer/UPDATE_USER_LOGIN_DATA');
export const CLEAR_USER_LOGIN_DATA = Symbol('@systemReducer/CLEAR_USER_LOGIN_DATA');
export const SHOW_ACCESS_MODAL = Symbol('@systemReducer/SHOW_ACCESS_MODAL');
export const HIDE_ACCESS_MODAL = Symbol('@systemReducer/HIDE_ACCESS_MODAL');
export const HANDLE_USER_ACCESS_ERROR = Symbol('@systemReducer/HANDLE_USER_ACCESS_ERROR');

export const initialState = {
  locale: 'zh',
  username: '',
  password: '',
  accessSave: false,
  accessError: {},
  isSuccess: false,
  accessModal: false,
  authenticated: Session.session
}

export default function systemReducer(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_USER_LOGIN_DATA:
      return {
        ...state,
        [action.key]: action.value
      }
    case INVALIDATE_USER_LOGIN_DATA:
      return {
        ...state,
        accessError: action.accessError
      }
    case INITIAL_LOGIN:
      return {
        ...state,
        username: action.username,
        password: action.password,
        accessSave: action.accessSave
      }
    case USER_LOGIN:
      return {
        ...state,
        authenticated: action.session,
        accessModal: false
      }
    case USER_LOGOUT:
      return {
        ...state,
        authenticated: undefined,
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        locale: action.locale
      }
    case CLEAR_USER_LOGIN_DATA:
      return {
        ...state,
        username: '',
        password: '',
        accessSave: false,
        accessError: {},
        isSuccess: false
      }
    case SHOW_ACCESS_MODAL:
      return {
        ...state,
        accessModal: true
      }
    case HIDE_ACCESS_MODAL:
      return {
        ...state,
        accessModal: false
      }
    case HANDLE_USER_ACCESS_ERROR:
      const { code } = action.error;
      switch(code) {
        case 'CSL-AUTH-1302':
          return {
            ...state,
            accessError: {
              access: 'client.error.username.invalid' 
            }
          }
          case 'CSL-AUTH-1303':
          return {
            ...state,
            accessError: {
              access: 'client.error.password.invalid' 
            }
          }
          default: return state;
      }
    default: return state;
  }
}