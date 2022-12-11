import React from 'react';

import { Button } from '../../../../common/components/button/Button';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types/ReturnComponentType';

import style from './Message.module.css';

type Props = {
  closeModal: () => void;
  modalIsOpen: boolean;
};

export const MistakeMessage = ({
  closeModal,
  modalIsOpen,
}: Props): ReturnComponentType => {
  const currentUserChar = useAppSelector(
    state => state.training.userCode.currentUserChar,
  );
  const currentRightChar = useAppSelector(
    state => state.training.userCode.currentRightChar,
  );

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
