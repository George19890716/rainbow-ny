export default class Session {
  static session = localStorage.getItem('rainbowny-session') ? JSON.parse(localStorage.getItem('rainbowny-session')) : undefined;
  static cookie = localStorage.getItem('rainbowny-cookie') ? JSON.parse(localStorage.getItem('rainbowny-cookie')) : '';

  static setSession(session) {
    localStorage.setItem('rainbowny-session', JSON.stringify(session));
  }

  static removeSession() {
    localStorage.removeItem('rainbowny-session');
  }

  static setCookie(cookie) {
    localStorage.setItem('rainbowny-cookie', JSON.stringify(cookie));
  }

  static getCookie() {
    return localStorage.getItem('rainbowny-cookie') ? JSON.parse(localStorage.getItem('rainbowny-cookie')) : '';
  }

  static removeCookie() {
    localStorage.removeItem('rainbowny-cookie');
  }
}