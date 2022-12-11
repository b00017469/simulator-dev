import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { useTypingSpeed } from '../../../common/hooks/useTypingSpeed';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { setSpeed, updateStats } from '../reducer/trainingReducer';

import style from './StatsPanel.module.css';

type Props = {
  charactersCount: number;
  isPause: boolean;
  isEndTraining: boolean;
};

export const StatsPanel = ({
  charactersCount,
  isPause,
  isEndTraining,
}: Props): ReturnComponentType => {
  const dispatch = useDispatch();

  const mistakesCount = useAppSelector(
    state => state.training.userCode.currentMistakesCount,
  );

  const currentSpeed = useTypingSpeed(charactersCount, isPause);

  useEffect(() => {
    if (isEndTraining) {
      dispatch(updateStats(currentSpeed, mistakesCount));
    }
  }, [isEndTraining]);

  useEffect(() => {
    dispatch(setSpeed(currentSpeed));
  }, [currentSpeed]);

  return (
    <div className={style.panel}>
      <div>
        <span>Скорость набора: {currentSpeed} </span> символов в минуту.
      </div>

      <div>
        <span>Количество ошибок: {mistakesCount} </span> ошибок.
      </div>
    </div>
  );
};
