import React from 'react';
import styles from './Book.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { MdMoreVert } from 'react-icons/md';
import bookDelete from '../../../lib/services/bookDelete';

const SIZE = '32px';
const COLOR = '#415bd3';

const BookCard = ({ id, src, title, description, author, publisher, lang }) => {
  const deleteBook = e => {
    e.preventDefault();
    bookDelete(id);
  };

  return (
    <>
      <div className={styles.bookCard}>
        <Link href="/book">
          <a>
            <Image
              className={styles.imageBook}
              src={src}
              alt={title}
              width={218}
              height={330}
              objectFit="cover"
            />
            <div className={styles.propertiesBook}>
              <span> {title} </span>
              <br />
              <span> {description} </span>
              <br />
              <span>{author} </span>
              <br />
              <span> {publisher} </span>
              <br />
              <span> {lang} </span>
              <br />
              <div>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={styles.button}
                >
                  <MdMoreVert size={SIZE} color={COLOR} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link href={`/book/edit/${id}`}>
                      <a className="dropdown-item" href="#">
                        Editar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Eliminar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </Link>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Eliminar Libro
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">¿Desea eliminar el libro "{title}"?</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={deleteBook}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
