import React from 'react';

import { SubCategoryType } from '../../../../features/sidebar/reducer/sidebarReducer';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import style from './SubCategory.module.css';

type Props = {
  subCategory: SubCategoryType;
  isSelected: boolean;
  setSelectedSubId: (id: string) => void;
  setSelectedId: () => void;
};

export const SubCategory = ({
  subCategory,
  isSelected,
  setSelectedId,
  setSelectedSubId,
}: Props): ReturnComponentType => {
  const categoryStyle = `${style.item} ${isSelected ? style.active : ''}`;

  const openCategory = (): void => {
    setSelectedSubId(subCategory.id);
    setSelectedId();
  };

  return (
    <div>
      <button className={categoryStyle} type="button" onClick={openCategory}>
        {subCategory.title}
      </button>
    </div>
  );
};
