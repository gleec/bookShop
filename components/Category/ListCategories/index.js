import React, { useState, useEffect } from 'react';
import styles from './ListCategories.module.scss';
import ListOfBookCard from '../../Book/ListOfBookCard';
import getCategories from '../../../lib/services/category';
import categoryDelete from '../../../lib/services/categoryDelete';
import { MdModeEdit, MdClose } from 'react-icons/md';
import Link from 'next/link';

import { toast } from 'react-toastify';

const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState([]);

  const fetchCategories = () => {
    getCategories().then(categories => {
      setCategories(categories);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const getCategoryId = id => {
    setCategoryId(id);
  };

  const deleteCategory = () => {
    categoryDelete(categoryId)
      .then(() => {
        toast.success('Eliminada con éxito!', {});
        fetchCategories();
      })
      .catch(() => {
        toast.error('Error no se pudo eliminar la categoría');
      });
  };

  return (
    <>
      <div>
        <div className={styles.propertiesCategory}>
          {categories.map(category => (
            <div key={category._id}>
              <div className={styles.flex}>
                <span className={styles.title}> {category.name} </span>
                <Link href={`/category/edit/${category._id}`}>
                  <a>
                    <MdModeEdit size="20px" color="#415bd3" />
                  </a>
                </Link>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => getCategoryId(category._id)}
                >
                  <MdClose size="20px" color="red" />
                </a>
              </div>
              <p className={styles.description}>{category.description}</p>
              <ListOfBookCard categoryId={category._id} />
            </div>
          ))}
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
                    Eliminar Categoria
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">¿Desea eliminar la categoria?</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cerrar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={deleteCategory}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategories;
