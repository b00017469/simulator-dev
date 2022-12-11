import React from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '../../../../common/components/button/Button';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types/ReturnComponentType';
import { getResultMistakesMessage } from '../../../../common/utils/getResultMistakesMessage';
import { getResultSpeedMessage } from '../../../../common/utils/getResultSpeedMessage';
import { clearUserCode } from '../../reducer/trainingReducer';

import style from './Message.module.css';

type Props = {
  closeModal: () => void;
};

export const FinalMessage = ({ closeModal }: Props): ReturnComponentType => {
  const dispatch = useDispatch();

  const speedTyping = useAppSelector(state => state.training.userCode.currentSpeed);
  const maxUsersSpeed = useAppSelector(
    state => state.training.trainingCode.maxUsersSpeed,
  );
  const mistakesCount = useAppSelector(
    state => state.training.userCode.currentMistakesCount,
  );

  const restart = (): void => {
    dispatch(clearUserCode());
    closeModal();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>Ваш результат</div>

      <div className={style.message}>
        {getResultMistakesMessage(mistakesCount)}
        Твоя скорость набора кода {speedTyping} символов в минуту.{' '}
        {getResultSpeedMessage(speedTyping, maxUsersSpeed)}
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
