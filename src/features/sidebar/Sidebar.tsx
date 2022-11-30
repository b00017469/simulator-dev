import React, { ChangeEvent, useEffect, useState } from 'react';

import { Category } from '../../common/components/category/Category';
import { useDebounce } from '../../common/hooks/useDebounce';
import { CategoryType } from '../../common/types/Category';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { codeCategories } from '../../db/codeCategories';

import style from './Sidebar.module.css';

const timeWait = 500;

export const Sidebar = (): ReturnComponentType => {
  const [idSelectedItem, setIdSelectedItem] = useState<string>('');
  const [idSelectedSubItem, setIdSelectedSubItem] = useState('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [categories, setCategories] = useState<CategoryType[]>(codeCategories);

  const debounceText = useDebounce<string>(searchValue, timeWait);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debounceText) {
      setCategories(
        categories.filter(category =>
          category.title.toUpperCase().includes(debounceText.toUpperCase()),
        ),
      );
    } else setCategories(codeCategories);
  }, [debounceText]);

  return (
    <div className={style.sidebar}>
      <h2>Категории</h2>
      <div>
        <input
          type="search"
          placeholder="Поиск категории"
          className={style.search}
          value={searchValue}
          onChange={onChangeTextSearch}
        />
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
            isSelected={idSelectedItem === category.id}
            setSelectedId={setIdSelectedItem}
            idSelectedSubItem={idSelectedSubItem}
            setIdSelectedSubItem={setIdSelectedSubItem}
          />
        ))}
      </div>
    </div>
  );
};
