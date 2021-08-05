import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListOfBookCard.module.scss';
import getBooksByCategory from '../../../lib/services/bookByCategory';

SwiperCore.use([Navigation]);

/*
const books = [
  {
    title: 'The Da Vinci Code',
    author: 'Random House',
    publisher: 'Abril, 2003',
    lang: 'Inglés',
    src:
      'https://planetadelibrosve3.cdnstatics.com/usuaris/libros/fotos/193/m_libros/192435_portada_el-codigo-da-vinci_dan-brown_201505260959.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Random House',
    publisher: 'Abril, 2003',
    lang: 'Inglés',
    src:
      'https://planetadelibrosve3.cdnstatics.com/usuaris/libros/fotos/193/m_libros/192435_portada_el-codigo-da-vinci_dan-brown_201505260959.jpg'
  }
];
*/

const ListOfBookCard = ({ categoryId }) => {
  const [booksByCategory, setBooksByCategory] = useState([]);

  useEffect(() => {
    getBooksByCategory(categoryId).then(books => {
      setBooksByCategory(books);
    });
  }, []);

  return (
    <>
      <Swiper navigation spaceBetween={10} slidesPerView={'auto'} freeMode={true}>
        {booksByCategory.map(book => (
          <SwiperSlide key={book._id} className={styles.swiperSlide}>
            <BookCard
              id={book._id}
              src={book.cover.url}
              title={book.title}
              description={book.description}
              author={book.author}
              publisher={book.publisher}
              lang={book.lang}
              className={styles.carousel}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListOfBookCard;
