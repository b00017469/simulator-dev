import React, { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { useDebounce } from '../../../common/hooks/useDebounce';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { getCategories, setCategoriesSearch } from '../reducer/categorySelectorReducer';

import style from './Search.module.css';

const timeWait = 500;

export const Search = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceText = useDebounce<string>(searchValue, timeWait);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debounceText) {
      dispatch(setCategoriesSearch(debounceText));
    } else dispatch(getCategories());
  }, [debounceText, dispatch]);

  return (
    <input
      type="search"
      placeholder="Поиск категории"
      className={style.search}
      value={searchValue}
      onChange={onChangeTextSearch}
    />
  );
};
