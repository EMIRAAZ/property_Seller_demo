import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.uaeassistant.com/',
  timeout: 20000,
});
