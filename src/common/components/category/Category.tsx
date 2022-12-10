import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  CategoryType,
  selectCategory,
  selectSubcategory,
} from '../../../features/categorySelector/reducer/categorySelectorReducer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Category.module.css';
import { SubCategory } from './subCategory/SubCategory';

type Props = {
  category: CategoryType;
};

export const Category = ({ category }: Props): ReturnComponentType => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const isToggleSearchedCategory = useAppSelector(
    state => state.selector.isToggleSearchedCategory,
  );
  const idSelectedCategory = useAppSelector(state => state.selector.idSelectedCategory);

  const categoryStyle = `${style.accordion} ${
    idSelectedCategory === category.id ? style.active : ''
  }`;
  const nestedElementsStyle = `${style.nested} ${toggle ? style.toggle : ''}`;

  const openCategory = (): void => {
    dispatch(selectSubcategory(''));
    dispatch(selectCategory(category.id));
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(isToggleSearchedCategory);
  }, [isToggleSearchedCategory]);

  return (
    <div>
      <button className={categoryStyle} type="button" onClick={openCategory}>
        {category.title}
      </button>

      <div className={nestedElementsStyle}>
        {category.subcategories.map(sub => (
          <SubCategory key={sub.id} subCategory={sub} />
        ))}
      </div>
    </div>
  );
};
