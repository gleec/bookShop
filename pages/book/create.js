import React from 'react';
import BookForm from '../../components/Book/BookForm';
import bookCreate from '../../lib/services/bookCreate';
import Layout from '../../components/Layout';

const CreateBook = () => {
  const onSubmit = data => {
    bookCreate(data);
  };
  return (
    <Layout>
      <BookForm submit={onSubmit} title="Crear libro" />
    </Layout>
  );
};

export default CreateBook;
