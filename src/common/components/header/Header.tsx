import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Header.module.css';

export const Header = (): ReturnComponentType => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <span>{'</>'}</span>
      </div>

      <div>
        Simulator<span>Dev</span>
      </div>
    </header>
  );
};
