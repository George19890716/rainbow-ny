import { CHANGE_LANGUAGE, INITIAL_LOGIN, USER_LOGIN, USER_LOGOUT, INVALIDATE_USER_LOGIN_DATA, UPDATE_USER_LOGIN_DATA,
   CLEAR_USER_LOGIN_DATA, SHOW_ACCESS_MODAL, HIDE_ACCESS_MODAL, HANDLE_USER_ACCESS_ERROR } from '../redux/modules/system-reducer';

import Session from '../services/Session';

function validate(key, value) {
  if (key === 'username') {
    if (!value) {
      return 'client.error.username.empty';
    }
  }
  if (key === 'password') {
    if (!value) {
      return 'client.error.password.empty';
    }
  }
  return null;
}

function filter(object) {
  for (let prop in object) {
    if (!object[prop]) {
      delete object[prop];
    }
  }
  return object;
}

export function selectEn () {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      locale: 'en'
    });
  }
}

export function selectZh () {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      locale: 'zh'
    });
  }
}

export function initialLogin() {
  const cookie = Session.getCookie();
  return (dispatch) => {
    dispatch({
      type: INITIAL_LOGIN,
      username: cookie ? cookie.rainbowny.username : '',
      password: cookie ? cookie.rainbowny.password : '',
      accessSave: cookie ? true : false,
    })
  }
}

export function userLogin() {
  return async (dispatch, getState) => {
    const { system: { username, password, accessSave } } = getState();
    let accessError = {
      username: validate('username', username),
      password: validate('password', password)
    }
    accessError = filter(accessError);
    if (Object.keys(accessError).length > 0) {
      dispatch({
        type: INVALIDATE_USER_LOGIN_DATA,
        accessError
      })
    } else {
      const body = JSON.stringify({
        username,
        password
      })

      fetch(
        '/login',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body
          }
      )
      .then(res => res.json())
      .then(response => {
        dispatch(clearAllData());
        const { status, code } = response;
        if (status === 100 && code === 'CSL-AUTH-100') {
          const { user } = response;
          const session = {
            authenticated: {
              data: user
            }
          }
          Session.setSession(session);
          dispatch({
            type: USER_LOGIN,
            session: session
          })
          if (accessSave) {
            const cookie = {
              rainbowny: {
                username,
                password
              }
            }
            Session.setCookie(cookie);
          } else {
            Session.removeCookie();
          }
        } else {
          dispatch({
            type: HANDLE_USER_ACCESS_ERROR,
            error: response
          })
        }
      })
      .catch(error => {
        dispatch(clearAllData());
        dispatch({
          type: HANDLE_USER_ACCESS_ERROR,
          error
        })
      });
    }
  }
}

export function userLogout() {
  return (dispatch) => {
    Session.removeSession();
    dispatch({
      type: USER_LOGOUT
    });
  }
}

export function updateValue(key, value) {
  return (dispatch, getState) => {
    let { system: { accessError } } = getState();
    const error = validate(key, value);
    accessError[key] = error;
    accessError['access'] = null;
    dispatch({
      type: UPDATE_USER_LOGIN_DATA,
      key,
      value,
      accessError
    });
  }
}

export function clearAllData() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_USER_LOGIN_DATA
    });
  }
}

export function showAccessModal() {
  return (dispatch) => {
    dispatch({
      type: SHOW_ACCESS_MODAL
    });
  }
}

export function hideAccessModal() {
  return (dispatch) => {
    dispatch({
      type: HIDE_ACCESS_MODAL
    });
  }
}