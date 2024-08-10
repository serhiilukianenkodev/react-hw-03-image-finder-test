import axios from 'axios';

const axiosOptions = {
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '28633518-489fc3ffd26d7dcbef31e85b5',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
};

export const fetchImages = async ({ query, page, setStatus }) => {
  try {
    const response = await axios.get(`?q=${query}&page=${page}`, axiosOptions);

    if (response.data.hits.length < 1) setStatus('rejected');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
