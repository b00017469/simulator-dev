import React, { useState } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Category.module.css';

type Props = {
  category: any;
};

export const SubCategory = ({ category }: Props): ReturnComponentType => {
  const [isActive, setIsActive] = useState(false);

  const categoryStyle = `${style.accordion} ${isActive ? style.active : ''}`;

  const openCategory = (): void => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={categoryStyle} type="button" onClick={openCategory}>
        {category.title}
      </button>
    </div>
  );
};
