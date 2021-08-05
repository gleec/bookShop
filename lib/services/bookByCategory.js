import { bookApiInstance } from '../bookApi';

const getBooksByCategory = async id => {
  const { data } = await bookApiInstance.get(`/book/category/${id}`);
  return data.body;
};

export default getBooksByCategory;
