import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Category } from '../../common/components/category/Category';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import { getCategories } from './reducer/sidebarReducer';
import { Search } from './search/Search';
import style from './Sidebar.module.css';

export const Sidebar = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const [idSelectedItem, setIdSelectedItem] = useState<string>('');
  const [idSelectedSubItem, setIdSelectedSubItem] = useState('');

  const categories = useAppSelector(state => state.sidebar.categories);
  const isToggle = useAppSelector(state => state.sidebar.isToggle);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={style.sidebar}>
      <h2>Категории</h2>
      <div>
        <Search />
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
            isToggle={isToggle}
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
