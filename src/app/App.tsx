import React from 'react';

import { Header } from '../common/components/header/Header';
import { ReturnComponentType } from '../common/types/ReturnComponentType';
import { Sidebar } from '../features/sidebar/Sidebar';
import { Training } from '../features/training/Training';

import style from './App.module.css';

const App = (): ReturnComponentType => {
  return (
    <div className={style.app}>
      <Header />

      <div className={style.body}>
        <Sidebar />

        <Training />
      </div>
    </div>
  );
};

export default App;
