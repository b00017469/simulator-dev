import React from 'react';

import { useDispatch } from 'react-redux';

import {
  selectCategory,
  selectSubcategory,
  SubCategoryType,
} from '../../../../features/categorySelector/reducer/categorySelectorReducer';
import { getCode } from '../../../../features/training/reducer/trainingReducer';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import style from './SubCategory.module.css';

type Props = {
  subCategory: SubCategoryType;
};

export const SubCategory = ({ subCategory }: Props): ReturnComponentType => {
  const dispatch = useDispatch();

  const idSelectedSubcategory = useAppSelector(
    state => state.selector.idSelectedSubcategory,
  );

  const categoryStyle = `${style.item} ${
    idSelectedSubcategory === subCategory.id ? style.active : ''
  }`;

  const openSubcategory = (): void => {
    dispatch(selectSubcategory(subCategory.id));
    dispatch(selectCategory(''));
    dispatch(getCode(subCategory));
  };

  return (
    <div>
      <button className={categoryStyle} type="button" onClick={openSubcategory}>
        {subCategory.title}
      </button>
    </div>
  );
};
