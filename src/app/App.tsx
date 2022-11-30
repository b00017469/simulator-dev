import React from 'react';

import { Header } from '../common/components/header/Header';
import { ReturnComponentType } from '../common/types/ReturnComponentType';
import { Sidebar } from '../features/sidebar/Sidebar';

import style from './App.module.css';

const App = (): ReturnComponentType => {
  return (
    <div className={style.app}>
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
