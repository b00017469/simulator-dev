import React, { useState } from 'react';

import { Category } from '../../common/components/category/Category';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { codeCategories } from '../../db/codeCategories';

import style from './Sidebar.module.css';

export const Sidebar = (): ReturnComponentType => {
  const [idSelectedItem, setIdSelectedItem] = useState<string>('');
  const [idSelectedSubItem, setIdSelectedSubItem] = useState('');

  return (
    <div className={style.sidebar}>
      <h2>Категории</h2>
      <div>
        <input type="search" />
        {codeCategories.map(category => (
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
