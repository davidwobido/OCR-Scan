import React, { useEffect, useState } from 'react';

type SearchInputProps = {
  onSearch: (value: string) => void;
};

function SearchInput({ onSearch }: SearchInputProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length === 0) {
      return;
    }

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
      className="searchBar"
    />
  );
}

export default SearchInput;
