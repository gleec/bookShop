import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';
import cn from 'classnames';
import styles from './Menu.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SIZE = '32px';
const COLOR = '#415bd3';

const Menu = ({ activeMenu }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <MdLibraryBooks size="32px" color="#415bd3" />
          <h1 className={styles.title}>BookShop</h1>
        </div>

        <div className={cn({ [styles.showMenu]: activeMenu })}>
          <Link href="/">
            <a className={cn({ [styles.active]: router.pathname == '/' }, styles.titleItem)}>
              Inicio
            </a>
          </Link>
          <div className={styles.buttonItem}>
            <button
              className="btn btn-toggle "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCategory"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Categoria
            </button>
            <div
              className={cn({ show: router.pathname == '/category/create' }, 'collapse')}
              id="collapseCategory"
            >
              <Link href="/category/create">
                <a className={cn({ [styles.active]: router.pathname == '/category/create' })}>
                  Crear Categoria
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.buttonItem}>
            <button
              className="btn btn-toggle border-radius"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBook"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Libro
            </button>
            <div
              className={cn({ show: router.pathname == '/book/create' }, 'collapse')}
              id="collapseBook"
            >
              <Link href="/book/create">
                <a className={cn({ [styles.active]: router.pathname == '/book/create' })}>
                  Crear Libro
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
