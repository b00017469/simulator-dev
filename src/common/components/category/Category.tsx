import React, { useState } from 'react';

import { CategoryType } from '../../types/Category';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Category.module.css';
import { SubCategory } from './subCategory/SubCategory';

type Props = {
  category: CategoryType;
  isSelected: boolean;
  setSelectedId: (id: string) => void;
  idSelectedSubItem: string;
  setIdSelectedSubItem: (id: string) => void;
};

export const Category = ({
  category,
  isSelected,
  setSelectedId,
  idSelectedSubItem,
  setIdSelectedSubItem,
}: Props): ReturnComponentType => {
  const [toggle, setToggle] = useState(false);

  const categoryStyle = `${style.accordion} ${isSelected ? style.active : ''}`;
  const nestedElementsStyle = `${style.nested} ${toggle ? style.toggle : ''}`;

  const openCategory = (): void => {
    setIdSelectedSubItem('');
    setSelectedId(category.id);
    setToggle(!toggle);
  };

  return (
    <div>
      <button className={categoryStyle} type="button" onClick={openCategory}>
        {category.title}
      </button>
      <div className={nestedElementsStyle}>
        {category.subcategories.map(sub => (
          <SubCategory
            subCategory={sub}
            key={sub.id}
            isSelected={idSelectedSubItem === sub.id}
            setSelectedSubId={setIdSelectedSubItem}
            setSelectedId={() => setSelectedId(category.id)}
          />
        ))}
      </div>
    </div>
  );
};
