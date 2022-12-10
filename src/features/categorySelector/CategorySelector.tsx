import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Category } from '../../common/components/category/Category';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { codeCategories } from '../../db/codeCategories';

import style from './CategorySelector.module.css';
import { getCategories } from './reducer/categorySelectorReducer';
import { Search } from './search/Search';

export const CategorySelector = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const categories = useAppSelector(state => state.selector.categories);

  useEffect(() => {
    dispatch(getCategories(codeCategories));
  }, [dispatch]);

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
