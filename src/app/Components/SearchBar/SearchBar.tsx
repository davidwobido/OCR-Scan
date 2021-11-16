import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

type SearchInputProps = {
  onSearch: (value: string) => void;
};

function SearchInput({ onSearch }: SearchInputProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Enter search"
      className={styles.searchBar}
    />
  );
}

export default SearchInput;
