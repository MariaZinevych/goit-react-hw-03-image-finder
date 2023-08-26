import axios from 'axios';

// const API_KEY = '19462317-9864fc13c2867a4042c7cafcd';

export const FetchQuery = async (query, page) => {
  const responce = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=19462317-9864fc13c2867a4042c7cafcd&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responce.data;
};

export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
