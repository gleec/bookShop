import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import styles from './CategoryForm.module.scss';
import Link from 'next/link';

const CategoryForm = ({ submit, category = {}, title }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: category
  });

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
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              id="name"
              className="form-control"
              {...register('name', {
                required: true,
                maxLength: 20
              })}
            />
            {errors.name?.type === 'required' && (
              <span className={styles.error}>Nombre requerido</span>
            )}
            {errors.name?.type === 'maxLength' && (
              <span className={styles.error}>Máximo 20 caracteres</span>
            )}
          </div>
          <div className={styles.paddingTop}>
            <label htmlFor="description" className="form-label">
              Descripción
            </label>
            <textarea
              id="description "
              className="form-control"
              rows="8"
              {...register('description', {
                required: true
              })}
            />
            {errors.name?.type === 'required' && (
              <span className={styles.error}>Nombre requerido</span>
            )}
          </div>
          <div className={styles.center}>
            <button className={cn(styles.btnHover, styles.color9)} type="submit">
              Crear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
