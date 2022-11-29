import React from 'react';

import { Header } from '../common/components/header/Header';
import { Sidebar } from '../common/components/sidebar/Sidebar';
import { ReturnComponentType } from '../common/types/ReturnComponentType';

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
