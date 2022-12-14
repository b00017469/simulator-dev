import React, { LegacyRef } from 'react';

import { useDispatch } from 'react-redux';

import { Textarea } from '../../../common/components/textarea/Textarea';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { formatText } from '../../../common/utils/formatText';
import { setUserCodeText } from '../reducer/trainingReducer';

type Props = {
  textAreaRef: LegacyRef<HTMLTextAreaElement>;
};

export const HackerTextarea = ({ textAreaRef }: Props): ReturnComponentType => {
  const dispatch = useDispatch();

  const trainingCodeText = useAppSelector(
    state => state.training.trainingCode.trainingCodeText,
  );

  const onChangeUserCode = (userCode: string): void => {
    const currentRightChar = trainingCodeText.charAt(userCode.length - 1);
    const newUserCode = userCode.slice(0, -1) + currentRightChar;

    dispatch(setUserCodeText(formatText(trainingCodeText, newUserCode)));
  };

  return (
    <Textarea
      textAreaRef={textAreaRef}
      onChangeFunc={onChangeUserCode}
      readonly={!trainingCodeText.length}
    />
  );
};
