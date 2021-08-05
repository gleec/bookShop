import React from 'react';
import CategoryForm from '../../../components/Category/CategoryForm';
import categoryEdit from '../../../lib/services/categoryEdit';
import categoryById from '../../../lib/services/categoryById';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const CategoryEdit = ({ category }) => {
  const router = useRouter();
  const onSubmit = data => {
    categoryEdit(data, category._id)
      .then(() => {
        toast.success('Modificada con éxito!');
        router.push('/');
      })
      .catch(err => {
        toast.error('Error no se pudo modificar');
      });
  };

  return <CategoryForm submit={onSubmit} category={category} title="Editar Categoria" />;
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const category = await categoryById(id);

  return {
    props: {
      category
    }
  };
}

export default CategoryEdit;
