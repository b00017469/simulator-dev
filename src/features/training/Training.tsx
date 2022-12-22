import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { TextareaReadOnly } from '../../common/components/textarea/textareaReadOnly/TextareaReadOnly';
import { TrainingCodeField } from '../../common/components/textarea/trainingCodeField/TrainingCodeField';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import { MessageModal } from './messageModal/MessageModal';
import { clearUserCode } from './reducer/trainingReducer';
import { StatsPanel } from './statsPanel/StatsPanel';
import styles from './Training.module.css';
import { EndCheckModeTextarea } from './userTextarea/EndCheckModeTextarea';
import { HackerModeTextarea } from './userTextarea/HackerModeTextarea';
import { InstantCheckModeTextarea } from './userTextarea/InstantCheckModeTextarea';

export const Training = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpenModal] = useState(false);

  const { trainingCodeText, title } = useAppSelector(
    state => state.training.trainingCode,
  );
  const userCodeText = useAppSelector(state => state.training.userCode.userCodeText);
  const linesWithMistakes = useAppSelector(
    state => state.training.userCode.linesWithMistakes,
  );
  const mode = useAppSelector(state => state.training.mode);

  const isEndTraining =
    trainingCodeText.length === userCodeText.length && userCodeText.length > 0;

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const closeModal = (): void => {
    setIsOpenModal(false);
    if (textAreaRef.current) textAreaRef.current.focus();
  };

  useEffect(() => {
    dispatch(clearUserCode());

    if (textAreaRef.current) textAreaRef.current.focus();
  }, [dispatch, trainingCodeText]);

  useEffect(() => setIsOpenModal(isEndTraining), [isEndTraining]);

  return (
    <div className={styles.trainingPanel}>
      <h2>{title}</h2>

      {mode !== 'end check mode' ? (
        <TextareaReadOnly value={trainingCodeText} />
      ) : (
        <TrainingCodeField
          value={trainingCodeText}
          linesWithMistakes={linesWithMistakes}
        />
      )}

      {mode === 'instant check mode' && (
        <InstantCheckModeTextarea
          textAreaRef={textAreaRef}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      {mode === 'hacker mode' && <HackerModeTextarea textAreaRef={textAreaRef} />}
      {mode === 'end check mode' && <EndCheckModeTextarea textAreaRef={textAreaRef} />}

      {mode !== 'end check mode' && (
        <MessageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          isEndTraining={isEndTraining}
        />
      )}

      <StatsPanel
        charactersCount={userCodeText.length}
        isPause={modalIsOpen}
        isEndTraining={isEndTraining}
      />
    </div>
  );
};
