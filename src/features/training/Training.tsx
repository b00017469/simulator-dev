import React, { useEffect, useState } from 'react';

import { Textarea } from '../../common/components/textarea/Textarea';
import { TextareaReadOnly } from '../../common/components/textarea/textareaReadOnly/TextareaReadOnly';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { formatText } from '../../common/utils/formatText';

import { MessageModal } from './messageModal/MessageModal';
import { StatsPanel } from './statsPanel/StatsPanel';
import styles from './Training.module.css';

export const Training = (): ReturnComponentType => {
  const [userCode, setUserCode] = useState<string>('');
  const [currentUserChar, setCurrentUserChar] = useState<string>('');
  const [currentRightChar, setCurrentRightChar] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const trainingCode = useAppSelector(state => state.training.trainingCode);

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const onChangeUserCode = (userCode: string): void => {
    const currentUserChar = userCode.slice(-1);
    const currentRightChar = trainingCode.code.charAt(userCode.length - 1);

    if (currentUserChar === currentRightChar) {
      return setUserCode(formatText(trainingCode.code, userCode));
    }
    setCurrentUserChar(currentUserChar);
    setCurrentRightChar(currentRightChar);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    if (textAreaRef.current) textAreaRef.current.focus();
  };

  const isEndTraining =
    trainingCode.code.length === userCode.length && userCode.length > 0;

  useEffect(() => {
    setUserCode('');
    if (textAreaRef.current) textAreaRef.current.focus();
  }, [trainingCode]);

  useEffect(() => setIsOpen(isEndTraining), [isEndTraining]);

  return (
    <div className={styles.trainingPanel}>
      <h2>{trainingCode.title}</h2>

      <TextareaReadOnly value={trainingCode.code} />

      <Textarea
        textAreaRef={textAreaRef}
        value={userCode}
        onChangeFunc={onChangeUserCode}
        readonly={!trainingCode.code.length}
      />

      <MessageModal
        currentUserChar={currentUserChar}
        currentRightChar={currentRightChar}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        isEndTraining={isEndTraining}
        clearUserCode={() => setUserCode('')}
      />

      <StatsPanel
        charactersCount={userCode.length}
        isPause={modalIsOpen}
        isEndTraining={isEndTraining}
      />
    </div>
  );
};
