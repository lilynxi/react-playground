import Axios from 'axios';

const KEY = 'AIzaSyC0j2gckM8aZc__oRSEw-z2caKL5a-oVPQ';

export default Axios.create({
  baseURL : "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
  },
});

// GET https://www.googleapis.com/youtube/v3/search

// snippet
// 5
// + query