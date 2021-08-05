import React from 'react';
import styles from './Search.module.scss';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const search = () => {
    if (searchText) {
      router.push({
        pathname: '/book/search',
        query: { query: encodeURIComponent(searchText) }
      });
    }
  };

  const onChange = event => {
    setSearchText(event.target.value);
  };

  const onkeyPressed = event => {
    if (event.key === 'Enter') {
      search();
    }
  };
  return (
    <div>
      <button className={styles.button} onClick={() => setDisplaySearch(!displaySearch)}>
        <MdSearch size="32px" color="#415bd3" />
      </button>
      <div className={styles.searchWrapper} style={{ maxHeight: displaySearch ? '72px' : '0px' }}>
        <div className={styles.searchField} style={{ opacity: displaySearch ? '1' : '0' }}>
          <label className={styles.searchLabel} htmlFor="search"></label>
          <input
            className={styles.searchInput}
            id="search"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={onChange}
            onKeyPress={onkeyPressed}
          />
          <button className={styles.button} onClick={() => search()}>
            <MdSearch size="32px" color="#415bd3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
