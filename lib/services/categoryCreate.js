import { bookApiInstance } from '../bookApi';

const categoryCreate = async categoryData => {
  const { data } = await bookApiInstance.post('/category', categoryData);
  return data.body;
};

export default categoryCreate;
