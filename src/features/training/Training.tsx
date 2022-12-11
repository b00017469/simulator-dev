import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Textarea } from '../../common/components/textarea/Textarea';
import { TextareaReadOnly } from '../../common/components/textarea/textareaReadOnly/TextareaReadOnly';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { formatText } from '../../common/utils/formatText';

import { MessageModal } from './messageModal/MessageModal';
import {
  clearUserCode,
  setCurrentChars,
  setMistakesCount,
  setUserCodeText,
} from './reducer/trainingReducer';
import { StatsPanel } from './statsPanel/StatsPanel';
import styles from './Training.module.css';

export const Training = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);

  const { trainingCodeText, title } = useAppSelector(
    state => state.training.trainingCode,
  );
  const { userCodeText, currentMistakesCount } = useAppSelector(
    state => state.training.userCode,
  );
  const isEndTraining =
    trainingCodeText.length === userCodeText.length && userCodeText.length > 0;

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const onChangeUserCode = (userCode: string): void => {
    const currentUserChar = userCode.slice(-1);
    const currentRightChar = trainingCodeText.charAt(userCode.length - 1);

    if (currentUserChar === currentRightChar) {
      dispatch(setUserCodeText(formatText(trainingCodeText, userCode)));
    } else {
      dispatch(setCurrentChars(currentUserChar, currentRightChar));
      dispatch(setMistakesCount(currentMistakesCount + 1));
      setIsOpen(true);
    }
  };

  const closeModal = (): void => {
    setIsOpen(false);
    if (textAreaRef.current) textAreaRef.current.focus();
  };

  useEffect(() => {
    dispatch(clearUserCode());

    if (textAreaRef.current) textAreaRef.current.focus();
  }, [trainingCodeText]);

  useEffect(() => setIsOpen(isEndTraining), [isEndTraining]);

  return (
    <div className={styles.trainingPanel}>
      <h2>{title}</h2>

      <TextareaReadOnly value={trainingCodeText} />

      <Textarea
        textAreaRef={textAreaRef}
        value={userCodeText}
        onChangeFunc={onChangeUserCode}
        readonly={!trainingCodeText.length}
      />

      <MessageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        isEndTraining={isEndTraining}
      />

      <StatsPanel
        charactersCount={userCodeText.length}
        isPause={modalIsOpen}
        isEndTraining={isEndTraining}
      />
    </div>
  );
};
