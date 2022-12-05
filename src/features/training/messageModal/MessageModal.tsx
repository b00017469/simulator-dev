import React from 'react';

import { Button } from '../../../common/components/button/Button';
import { Modal } from '../../../common/components/modal/Modal';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';

import style from './MessageModal.module.css';

type Props = {
  currentUserChar?: string;
  currentRightChar?: string;
  closeModal: () => void;
  modalIsOpen: boolean;
  isEndTraining: boolean;
};

export const MessageModal = ({
  currentUserChar,
  currentRightChar,
  closeModal,
  modalIsOpen,
  isEndTraining,
}: Props): ReturnComponentType => {
  const speedTyping = useAppSelector(state => state.training.stats.speedTyping);

  return (
    <Modal show={modalIsOpen} enableBackground>
      {isEndTraining ? (
        <div>
          <div>Ваш результат</div>
          <div>
            Ваша скорость набора кода {speedTyping} символов в минуту - это быстрее, чем
            80% пользователей! Отличный результат!
          </div>
        </div>
      ) : (
        <div>
          <p className={style.message}>
            Ошибка)) Вы набрали <span>{currentUserChar}</span>, а необходимо{' '}
            <span>{currentRightChar}</span>
          </p>
        </div>
      )}
      <Button type="button" onClick={closeModal} autoFocus={modalIsOpen}>
        ОК
      </Button>
    </Modal>
  );
};
