import React from 'react';

import { Button } from '../../../common/components/button/Button';
import { Modal } from '../../../common/components/modal/Modal';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { getResultMessage } from '../../../common/utils/getResultMessage';

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
  const maxUsersSpeed = useAppSelector(
    state => state.training.trainingCode.maxUsersSpeed,
  );

  return (
    <Modal show={modalIsOpen} enableBackground>
      {isEndTraining ? (
        <div>
          <div>Ваш результат</div>
          <div>
            Ваша скорость набора кода {speedTyping} символов в минуту.
            {getResultMessage(speedTyping, maxUsersSpeed)}
          </div>
          <Button type="button" onClick={closeModal}>
            Пройти заново
          </Button>
          <Button type="button" onClick={closeModal}>
            Следующий пример
          </Button>
        </div>
      ) : (
        <div>
          <div className={style.message}>
            Ошибка)) Вы набрали <span>{currentUserChar}</span>, а необходимо{' '}
            <span>{currentRightChar}</span>
          </div>
          <Button type="button" onClick={closeModal} autoFocus={modalIsOpen}>
            Продолжить
          </Button>
        </div>
      )}
    </Modal>
  );
};
