import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Textarea } from '../../common/components/textarea/Textarea';
import { TextareaReadOnly } from '../../common/components/textarea/textareaReadOnly/TextareaReadOnly';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { formatText } from '../../common/utils/formatText';

import { MessageModal } from './messageModal/MessageModal';
import { setMistakesCount, setSpeed, setUserCodeText } from './reducer/trainingReducer';
import { StatsPanel } from './statsPanel/StatsPanel';
import styles from './Training.module.css';

export const Training = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [currentUserChar, setCurrentUserChar] = useState<string>('');
  const [currentRightChar, setCurrentRightChar] = useState<string>('');
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

      return;
    }
    setCurrentUserChar(currentUserChar);
    setCurrentRightChar(currentRightChar);
    dispatch(setMistakesCount(currentMistakesCount + 1));
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    if (textAreaRef.current) textAreaRef.current.focus();
  };

  const clearUserCode = (): void => {
    dispatch(setUserCodeText(''));
    dispatch(setMistakesCount(0));
    dispatch(setSpeed(0));
  };

  useEffect(() => {
    clearUserCode();

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
        currentUserChar={currentUserChar}
        currentRightChar={currentRightChar}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        isEndTraining={isEndTraining}
        clearUserCode={clearUserCode}
      />

      <StatsPanel
        charactersCount={userCodeText.length}
        isPause={modalIsOpen}
        isEndTraining={isEndTraining}
      />
    </div>
  );
};
