import { bookApiInstance } from '../bookApi';

const deleteBook = async id => {
  const { data } = await bookApiInstance.delete(`/book/${id}`);
  return data.body;
};

export default deleteBook;
