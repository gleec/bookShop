import React from 'react';
import Image from 'next/image';
import styles from './Search.module.scss';
import getSearch from '../../../lib/services/searchBook';
import Layout from '../../../components/Layout';

const Search = ({ searchedBooks }) => {
  return (
    <>
      <Layout>
        <div className={styles.bookList}>
          {searchedBooks.map(book => (
            <div className={styles.bookItem}>
              <Image
                src={book.cover.url}
                alt={book.title}
                width={218}
                height={330}
                objectFit="cover"
              />
              <div className={styles.bookContent}>
                <p className={styles.bookTitle}>{book.title}</p>
                <p className={styles.description}>{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { query } = context.query;
  const searchedBooks = await getSearch(query);

  console.log(context.query);
  console.log(searchedBooks);

  return {
    props: {
      searchedBooks
    }
  };
}

export default Search;
