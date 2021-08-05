import React, { useState, useEffect } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import getCategories from '../../../lib/services/category';
import styles from './BookForm.module.scss';
import Link from 'next/link';

const BookForm = ({ submit, book = {}, title }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: book
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories);
    });
  }, []);

  const onSubmit = data => {
    submit(data);
  };

  return (
    <div className={styles.padding}>
      <div className={styles.flex}>
        <Link href="/">
          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Ir atrás">
            <MdArrowBack size="32px" color="orange" />
          </a>
        </Link>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(styles.maxWidth, 'mb-3')}>
          <div className={styles.paddingTop}>
            <label htmlFor="title" className="form-label">
              Titulo
            </label>
            <input
              id="title"
              className="form-control"
              {...register('title', {
                required: true
              })}
            />
            {errors.name?.type === 'required' && (
              <span className={styles.error}>Titulo requerido</span>
            )}
          </div>
          <div className={styles.paddingTop}>
            <label htmlFor="title" className="form-label">
              Descripción
            </label>
            <input
              id="description"
              className="form-control"
              {...register('description', {
                required: true
              })}
            />
            {errors.name?.type === 'required' && (
              <span className={styles.error}>Titulo requerido</span>
            )}
          </div>
          <div className={styles.paddingTop}>
            <label htmlFor="author" className="form-label">
              Autor
            </label>
            <input
              id="author"
              className="form-control"
              {...register('author', {
                required: true,
                maxLength: 20
              })}
            />
            {errors.name?.type === 'required' && (
              <span className={styles.error}>Autor requerido</span>
            )}
            {errors.name?.type === 'maxLength' && (
              <span className={styles.error}>Máximo 20 caracteres</span>
            )}
          </div>

          <div className={styles.paddingTop}>
            <label htmlFor="publisher" className="form-label">
              Fecha de publicación
            </label>
            <input
              id="publisher"
              className="form-control"
              {...register('publisher', {
                required: true
              })}
            />
            {errors.name?.type === 'required' && (
              <span className={styles.error}>Fecha de publicación requerida</span>
            )}
          </div>

          <div className={styles.paddingTop}>
            <label htmlFor="lang" className="form-label">
              Lenguaje original
            </label>
            <input
              id="lang"
              class="form-control"
              {...register('lang', {
                required: true,
                maxLength: 20
              })}
            />
            {errors.name?.type === 'required' && (
              <span className={styles.error}>Lenguaje requerido</span>
            )}
            {errors.name?.type === 'maxLength' && (
              <span className={styles.error}>Máximo 20 caracteres</span>
            )}
          </div>

          <div className={styles.paddingTop}>
            <label htmlFor="categories" className="form-label">
              Categoria
            </label>
            <select {...register('category')} className="form-select mb-3">
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.center}>
            <button className={cn(styles.btnHover, styles.color9)} type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
