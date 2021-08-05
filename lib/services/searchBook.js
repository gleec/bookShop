import { bookApiInstance } from '../bookApi';

const searchBook = async text => {
  const { data } = await bookApiInstance.get(`/book/search/${text}`);
  return data.body;
};

export default searchBook;
