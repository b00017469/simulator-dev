import React, { useState } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Category.module.css';
import { SubCategory } from './SubCategory';

type Props = {
  category: any;
};

export const Category = ({ category }: Props): ReturnComponentType => {
  const [toggle, setToggle] = useState(false);

  const categoryStyle = `${style.accordion} ${toggle ? style.active : ''}`;
  const nestedElementsStyle = `${style.nested} ${toggle ? style.toggle : ''}`;

  const openCategory = (): void => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button className={categoryStyle} type="button" onClick={openCategory}>
        {category.title}
      </button>
      <div className={nestedElementsStyle}>
        {category.subcategories.map((sub: { id: React.Key | null | undefined }) => (
          <SubCategory category={sub} key={sub.id} />
        ))}
      </div>
    </div>
  );
};
