import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import Header from '../Header/index';
import Menu from '../Menu/index';
import styles from './Layout.module.scss';
import cn from 'classnames';

const SIZE = '32px';
const COLOR = '#415bd3';

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div>
      <div className={styles.flex}>
        <div className={cn(styles.menu, { [styles.showMenu]: activeMenu })}>
          <Menu activeMenu={activeMenu} />
        </div>
        <div className={styles.head}>
          <div className={styles.flexHead}>
            <button className={styles.buttonMenu} onClick={() => setActiveMenu(!activeMenu)}>
              {activeMenu ? (
                <MdClose size={SIZE} color={COLOR} />
              ) : (
                <MdMenu size={SIZE} color={COLOR} />
              )}
            </button>
            <div className={cn({ [styles.hiddenButton]: activeMenu })}>
              <Header />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
