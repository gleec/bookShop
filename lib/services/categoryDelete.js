import { bookApiInstance } from '../bookApi';

const deleteCategory = async id => {
  const { data } = await bookApiInstance.delete(`/category/${id}`);
  return data.body;
};

export default deleteCategory;
