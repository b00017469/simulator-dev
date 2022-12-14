import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { TextareaReadOnly } from '../../common/components/textarea/textareaReadOnly/TextareaReadOnly';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';

import { MessageModal } from './messageModal/MessageModal';
import { clearUserCode } from './reducer/trainingReducer';
import { StatsPanel } from './statsPanel/StatsPanel';
import styles from './Training.module.css';
import { EndCheckTextarea } from './userTextarea/EndCheckTextarea';
import { HackerTextarea } from './userTextarea/HackerTextarea';
import { InstantCheckTextarea } from './userTextarea/InstantCheckTextarea';

export const Training = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpenModal] = useState(false);

  const { trainingCodeText, title } = useAppSelector(
    state => state.training.trainingCode,
  );
  const userCodeText = useAppSelector(state => state.training.userCode.userCodeText);
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

      <TextareaReadOnly value={trainingCodeText} />

      {mode === 'instant check mode' && (
        <InstantCheckTextarea textAreaRef={textAreaRef} setIsOpenModal={setIsOpenModal} />
      )}
      {mode === 'hacker mode' && <HackerTextarea textAreaRef={textAreaRef} />}
      {mode === 'end check mode' && <EndCheckTextarea textAreaRef={textAreaRef} />}

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
