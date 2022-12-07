import React from 'react';

import { Button } from '../../../../common/components/button/Button';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types/ReturnComponentType';
import { getResultMessage } from '../../../../common/utils/getResultMessage';

import style from './Message.module.css';

type Props = {
  closeModal: () => void;
  clearUserCode: () => void;
};

export const FinalMessage = ({
  closeModal,
  clearUserCode,
}: Props): ReturnComponentType => {
  const speedTyping = useAppSelector(state => state.training.stats.speedTyping);
  const maxUsersSpeed = useAppSelector(
    state => state.training.trainingCode.maxUsersSpeed,
  );

  const restart = (): void => {
    clearUserCode();
    closeModal();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>Ваш результат</div>

      <div className={style.message}>
        Ваша скорость набора кода {speedTyping} символов в минуту.
        {getResultMessage(speedTyping, maxUsersSpeed)}
      </div>

      <div className={style.button}>
        <Button type="button" onClick={restart}>
          Пройти заново
        </Button>

        <Button type="button" onClick={closeModal}>
          Следующий пример
        </Button>
      </div>
    </div>
  );
};
