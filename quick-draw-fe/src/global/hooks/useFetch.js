import { cookie } from 'react-cookies';

export default function useFetch() {
  return (url, options) => {
    url = `${process.env.REACT_APP_API_URL}/api/v1${url}`;
    const token = cookie.load('token');
    if (token) {
      options.headers = options.headers ?? {};
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    return fetch(url, options);
  };
}
