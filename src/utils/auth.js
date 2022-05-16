const authToken = 'auth_token';
const intendedUrl = 'intendedUrl';
const defaultIntendedUrl = '/';

export const getToken = () => window.localStorage.getItem(authToken);

// console.log(`object window`, window.localStorage.getItem(authToken))

export const setToken = token => {
  // console.log(`token`, token) okkk
  token
    ? window.localStorage.setItem(authToken, token)
    : window.localStorage.removeItem(authToken);
};

export const getIntendedUrl = () => {
  console.log(intendedUrl|| defaultIntendedUrl);
  return window.localStorage.getItem(intendedUrl) || defaultIntendedUrl

};

export const setIntendedUrl = url => {
  url
    ? window.localStorage.setItem(intendedUrl, url)
    : window.localStorage.removeItem(intendedUrl);
};