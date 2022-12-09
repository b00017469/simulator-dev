import React, { useEffect, useState } from 'react';

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
  const [idSelectedItem, setIdSelectedItem] = useState<string>('');
  const [idSelectedSubItem, setIdSelectedSubItem] = useState('');

  const categories = useAppSelector(state => state.selector.categories);
  const isToggleSearchedCategory = useAppSelector(
    state => state.selector.isToggleSearchedCategory,
  );

  useEffect(() => {
    dispatch(getCategories(codeCategories));
  }, [dispatch]);

  return (
    <div className={style.selector}>
      <h2>Категории</h2>

      <div>
        <Search />
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
            isToggleSearchedCategory={isToggleSearchedCategory}
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
