import axios from "axios";

const API_KEY = '51392705-c835407a6ad34302eafe3f79f';
const BASE_URL = 'https://pixabay.com/api/';

// функція HTTP запитів 
export async function getImagesByQuery(query, page = 1, perPage = 15) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });
  return response.data;
}
