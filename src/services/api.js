import axios from 'axios';

const API_KEY = '045f57dbd430f06c0657f97d020f0d53';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = () => {
  return axios.get(`trending/movie/day?`).then(({ data }) => data.results);
};

// export const getTrendingMovies = async () => {
//   const { data } = await axios.get(`trending/movie/day?`);

//   return data.results;
// };

export const getSearchMovie = movieName => {
  axios.get(`search/movie?${movieName}`).then(({ data }) => {
    console.log(data.results);
  });
};

export const getMovieDetails = id => {
  axios.get(`movie/${id}?`).then(({ data }) => {
    console.log(data);
  });
};

export const getMovieActors = id => {
  axios.get(`movie/${id}/credits?`).then(({ data }) => {
    console.log(data.cast);
  });
};

export const getMovieReviews = id => {
  axios.get(`movie/${id}/reviews`).then(({ data }) => {
    console.log(data.results);
  });
};
