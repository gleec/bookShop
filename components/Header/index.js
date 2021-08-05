import React from 'react';
import styles from './Header.module.scss';
import { MdAddCircleOutline } from 'react-icons/md';
import Link from 'next/link';
import Search from '../Book/Search';

const SIZE = '32px';
const COLOR = '#415bd3';

const Header = () => {
  return (
    <header>
      <div className={styles.flex}>
        <div className={styles.buttonChild}>
          <Search />
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className={styles.button}
            >
              <MdAddCircleOutline size={SIZE} color={COLOR} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link href="/category/create">
                  <a className="dropdown-item">Crear Categoria</a>
                </Link>
              </li>
              <li>
                <Link href="/book/create">
                  <a className="dropdown-item">Crear Libro</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
