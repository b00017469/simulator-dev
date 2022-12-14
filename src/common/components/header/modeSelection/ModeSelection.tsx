import React, { useState } from 'react';

import {
  changeMode,
  ModeTyping,
} from '../../../../features/training/reducer/trainingReducer';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { Button } from '../../button/Button';
import { Modal } from '../../modal/Modal';

import style from './ModeSelection.module.css';

export const ModeSelection = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(state => state.training.mode);

  const [newMode, setNewMode] = useState<ModeTyping>(mode);
  const [modalIsOpen, setIsOpenModal] = useState(false);

  const clickOk = (): void => {
    dispatch(changeMode(newMode));
    setIsOpenModal(false);
  };

  const openModal = (): void => {
    setIsOpenModal(true);
  };

  return (
    <div className={style.selection}>
      <button type="button" onClick={openModal}>
        {mode}
      </button>

      <Modal show={modalIsOpen} enableBackground modalStyle={style.modal}>
        <h3 className={style.header}>Вибери режим</h3>

        <button type="button" onClick={() => setNewMode('instant check mode')}>
          Мгновеная проверка кода
        </button>
        <button type="button" onClick={() => setNewMode('end check mode')}>
          Проверка кода после набора
        </button>
        <button type="button" onClick={() => setNewMode('hacker mode')}>
          Я всегда набираю код без ошибок!!!
        </button>

        <Button type="button" onClick={clickOk}>
          Ok
        </Button>
      </Modal>
    </div>
  );
};
