import React from 'react';
import SearchInput from './SearchBar';

export default {
  component: SearchInput,
  title: 'Components/SearchInput',
};

export const Default = () => <SearchInput onSearch={console.log} />;
