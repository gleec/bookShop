import React from 'react';
import CategoryForm from '../../components/Category/CategoryForm';
import categoryCreate from '../../lib/services/categoryCreate';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const CreateCategory = () => {
  const router = useRouter();
  const onSubmit = data => {
    categoryCreate(data)
      .then(() => {
        toast.success('Creada con éxito!', {});
        router.push('/');
      })
      .catch(err => {
        toast.error('Error no se pudo crear la categoría');
      });
  };

  return (
    <Layout>
      <CategoryForm submit={onSubmit} title="Crear Categoria" />
    </Layout>
  );
};

export default CreateCategory;
