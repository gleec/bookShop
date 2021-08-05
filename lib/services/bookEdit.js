import { bookApiInstance } from '../bookApi';

const bookEdit = async (bookData, id) => {
  const { data } = await bookApiInstance.put(`/book/${id}`, bookData);
  return data.body;
};

export default bookEdit;
