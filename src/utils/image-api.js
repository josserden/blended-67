import axios from 'axios';

const API_KEY = '35192851-fc29fd2fdeb3482916bee0708';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`/?q=${query}&page=${page}`);

  return data.hits;
};
