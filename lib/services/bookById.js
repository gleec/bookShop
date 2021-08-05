import { bookApiInstance } from '../bookApi';

const getBookById = async id => {
  const { data } = await bookApiInstance.get(`/book/${id}`);
  return data.body;
};

export default getBookById;
