import React, { useState } from 'react';

import { Button } from '../../common/components/button/Button';
import { Textarea } from '../../common/components/textarea/Textarea';
import { TextareaReadOnly } from '../../common/components/textarea/textareaReadOnly/TextareaReadOnly';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { formatText } from '../../common/utils/formatText';
import { codeCategories } from '../../db/codeCategories';

import { MessageModal } from './messageModal/MessageModal';
import styles from './Training.module.css';

export const Training = (): ReturnComponentType => {
  const [userCode, setUserCode] = useState<string>('');
  const [currentUserChar, setCurrentUserChar] = useState<string>('');
  const [currentRightChar, setCurrentRightChar] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const { code } = codeCategories[0].subcategories[0];

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const onChangeUserCode = (userCode: string): void => {
    const currentUserChar = userCode.slice(-1);
    const currentRightChar = code.charAt(userCode.length - 1);

    if (currentUserChar === currentRightChar) {
      return setUserCode(formatText(code, userCode));
    }
    setCurrentUserChar(currentUserChar);
    setCurrentRightChar(currentRightChar);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    if (textAreaRef.current) textAreaRef.current.focus();
  };

  return (
    <div className={styles.trainingPanel}>
      <h2>Трениковка по CSS</h2>

      <TextareaReadOnly value={code} />

      <Textarea
        textAreaRef={textAreaRef}
        value={userCode}
        onChangeFunc={onChangeUserCode}
        readonly={false}
      />

      <MessageModal
        currentUserChar={currentUserChar}
        currentRightChar={currentRightChar}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />

      <Button type="button">Проверить</Button>
    </div>
  );
};
