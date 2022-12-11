import React, { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useDebounce } from '../../../common/hooks/useDebounce';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { categoriesData } from '../reducer/categorySelectorReducer';

import style from './Search.module.css';

const timeWait = 500;

export const Search = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceText = useDebounce<string>(searchValue, timeWait);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    dispatch(categoriesData(debounceText));
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
