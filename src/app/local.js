import Cookies from 'js-cookie';



export const setCookie = (user) => {
  Cookies.set('user', JSON.stringify(user));
}
export const getCookie = () => {
  const user = Cookies.get('user');
  return user ? JSON.parse(user) : null;
}
export const removeCookie = (user) => {
  Cookies.remove('user');
}