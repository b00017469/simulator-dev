import { useEffect, useState } from 'react';

import { Nullable } from '../types/Nullable';
import { calculateSpeed } from '../utils/calculateSpeed';

export const useTypingSpeed = (charactersCount: number, isPause: boolean): number => {
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

  return currentSpeed;
};
