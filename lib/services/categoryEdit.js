import { bookApiInstance } from '../bookApi';

const categoryEdit = async (categoryData, id) => {
  const { data } = await bookApiInstance.put(`/category/${id}`, categoryData);
  return data.body;
};

export default categoryEdit;
