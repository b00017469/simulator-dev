import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Sidebar.module.css';

export const Sidebar = (): ReturnComponentType => {
  return (
    <div className={style.sidebar}>
      <h2>Категории</h2>
      <div>
        <input type="search" />
      </div>
    </div>
  );
};
