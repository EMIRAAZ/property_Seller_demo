import axios from 'axios';

export default axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: 'http://54.163.214.5/',
  baseURL: 'https://propertyassistant.ae/',

  timeout: 20000,
});
