import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bf968b0577e824251d67789a026537d472eef1ec5c87595c1b5ffa94c54e4af4'
  }
});