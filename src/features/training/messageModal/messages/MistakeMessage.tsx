import React from 'react';

import { Button } from '../../../../common/components/button/Button';
import { ReturnComponentType } from '../../../../common/types/ReturnComponentType';

import style from './Message.module.css';

type Props = {
  closeModal: () => void;
  modalIsOpen: boolean;
  currentUserChar: string | undefined;
  currentRightChar: string | undefined;
};

export const MistakeMessage = ({
  closeModal,
  modalIsOpen,
  currentUserChar,
  currentRightChar,
}: Props): ReturnComponentType => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>Ошибка!</div>

      <div className={style.message}>
        Вы набрали <span>{currentUserChar}</span>, а необходимо{' '}
        <span>{currentRightChar}</span>
      </div>

      <div className={style.button}>
        <Button type="button" onClick={closeModal} autoFocus={modalIsOpen}>
          Продолжить
        </Button>
      </div>
    </div>
  );
};
