import { bookApiInstance } from '../bookApi';

const getCategoryById = async id => {
  const { data } = await bookApiInstance.get(`/category/${id}`);
  return data.body;
};

export default getCategoryById;
