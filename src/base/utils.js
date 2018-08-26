import Cookies from 'universal-cookie';

const cookies = new Cookies();
const utils = {
  setCookie(name, value, options) {
    return cookies.set(name, value, options);
  },
  delCookie(name) {
    return cookies.remove(name);
  },
  getCookie(name) {
    return cookies.get(name);
  },
};

export default utils;
