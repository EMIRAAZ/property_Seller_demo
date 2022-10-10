import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.uaeassistant.com:3000/',
  timeout: 20000,
});
