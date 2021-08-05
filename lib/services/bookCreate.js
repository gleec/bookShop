import { bookApiInstance } from '../bookApi';

const bookCreate = async bookData => {
  const { data } = await bookApiInstance.post('/book', bookData);
  return data.body;
};

export default bookCreate;
