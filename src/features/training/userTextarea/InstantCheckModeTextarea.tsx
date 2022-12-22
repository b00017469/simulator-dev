import React, { LegacyRef } from 'react';

import { useDispatch } from 'react-redux';

import { Textarea } from '../../../common/components/textarea/Textarea';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { formatText } from '../../../common/utils/formatText';
import {
  setCurrentChars,
  setMistakesCount,
  setUserCodeText,
} from '../reducer/trainingReducer';

type Props = {
  textAreaRef: LegacyRef<HTMLTextAreaElement>;
  setIsOpenModal: (isOpen: boolean) => void;
};

export const InstantCheckModeTextarea = ({
  textAreaRef,
  setIsOpenModal,
}: Props): ReturnComponentType => {
  const dispatch = useDispatch();

  const trainingCodeText = useAppSelector(
    state => state.training.trainingCode.trainingCodeText,
  );
  const currentMistakesCount = useAppSelector(
    state => state.training.userCode.currentMistakesCount,
  );

  const onChangeUserCode = (userCode: string): void => {
    const currentUserChar = userCode.slice(-1);
    const currentRightChar = trainingCodeText.charAt(userCode.length - 1);

    if (currentUserChar === currentRightChar) {
      dispatch(setUserCodeText(formatText(trainingCodeText, userCode)));
    } else {
      dispatch(setCurrentChars(currentUserChar, currentRightChar));
      dispatch(setMistakesCount(currentMistakesCount + 1));
      setIsOpenModal(true);
    }
  };

  return (
    <Textarea
      textAreaRef={textAreaRef}
      onChangeFunc={onChangeUserCode}
      readonly={!trainingCodeText.length}
    />
  );
};
