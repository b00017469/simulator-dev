import React from 'react';

import { useDispatch } from 'react-redux';

import { SubCategoryType } from '../../../../features/categorySelector/reducer/categorySelectorReducer';
import { getCode } from '../../../../features/training/reducer/trainingReducer';
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
  const dispatch = useDispatch();

  const categoryStyle = `${style.item} ${isSelected ? style.active : ''}`;

  const openCategory = (): void => {
    setSelectedSubId(subCategory.id);
    setSelectedId();
    dispatch(getCode(subCategory));
  };

  return (
    <div>
      <button className={categoryStyle} type="button" onClick={openCategory}>
        {subCategory.title}
      </button>
    </div>
  );
};
