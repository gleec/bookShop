import React from 'react';
import BookForm from '../../../components/Book/BookForm';
import bookEdit from '../../../lib/services/bookEdit';
import bookById from '../../../lib/services/bookById';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const BookEdit = ({ book }) => {
  const router = useRouter();
  const onSubmit = data => {
    bookEdit(data, book._id)
      .then(() => {
        toast.success('Modificado con éxito!');
        router.push('/');
      })
      .catch(err => {
        toast.error('Error no se pudo modificar');
      });
  };

  return <BookForm submit={onSubmit} book={book} title="Editar libro" />;
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const book = await bookById(id);

  return {
    props: {
      book
    }
  };
}

export default BookEdit;
