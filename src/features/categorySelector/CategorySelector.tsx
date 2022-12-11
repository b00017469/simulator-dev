import React from 'react';

import { Category } from '../../common/components/category/Category';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import style from './CategorySelector.module.css';
import { Search } from './search/Search';

export const CategorySelector = (): ReturnComponentType => {
  const categories = useAppSelector(state => state.selector.categories);

  return (
    <div className={style.wrapper}>
      <h2>Категории</h2>

      <div className={style.selector}>
        <Search />

        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
