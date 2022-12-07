import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Nullable } from '../../../common/types/Nullable';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { calculateSpeed } from '../../../common/utils/calculateSpeed';
import { setSpeed } from '../reducer/trainingReducer';

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

  const [startTime, setStartTime] = useState<Nullable<number>>(null);
  const [startPauseTime, setStartPauseTime] = useState<Nullable<number>>(null);
  const [pauseTime, setPauseTime] = useState<number>(0);
  const [currentSpeed, setCurrentSpeed] = useState<number>(0);

  useEffect(() => {
    if (charactersCount === 0) {
      setCurrentSpeed(0);
      setStartTime(null);
      setPauseTime(0);
    }

    if (charactersCount === 1) setStartTime(Date.now());

    if (charactersCount > 1 && startTime)
      setCurrentSpeed(calculateSpeed(startTime, pauseTime, charactersCount));
  }, [charactersCount, startTime]);

  useEffect(() => {
    if (isPause) {
      setStartPauseTime(Date.now());
    }
    if (!isPause && startPauseTime) {
      setPauseTime(Date.now() - startPauseTime + pauseTime);
    }
  }, [isPause]);

  useEffect(() => {
    if (isEndTraining) dispatch(setSpeed(currentSpeed.toString()));
  }, [dispatch, isEndTraining]);

  return (
    <div className={style.panel}>
      <p>
        <span>Скорость набора: {currentSpeed} </span> символов в минуту.
      </p>
    </div>
  );
};
