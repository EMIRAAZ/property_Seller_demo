import axios from 'axios';

export default axios.create({
  baseURL: 'http://3.94.127.24:3000/',
  timeout: 3000,
});
