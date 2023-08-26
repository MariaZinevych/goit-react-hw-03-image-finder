import axios from 'axios';

// const API_KEY = '19462317-9864fc13c2867a4042c7cafcd';

export const FetchQuery = async query => {
  const responce = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=19462317-9864fc13c2867a4042c7cafcd&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responce.data;
};
