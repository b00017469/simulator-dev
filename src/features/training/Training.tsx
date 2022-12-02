import React, { useState } from 'react';

import ReactModal from 'react-modal';

import { Button } from '../../common/components/button/Button';
import { Textarea } from '../../common/components/textarea/Textarea';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { formatText } from '../../common/utils/formatText';
import { codeCategories } from '../../db/codeCategories';

import styles from './Training.module.css';

export const Training = (): ReturnComponentType => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userCode, setUserCode] = useState<string>('');
  const [currentUserChar, setCurrentUserChar] = useState<string>('');
  const [currentRightChar, setCurrentRightChar] = useState<string>('');
  const code = codeCategories[0].subcategories[0].code[0].content;

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
  };

  return (
    <div className={styles.trainingPanel}>
      <h2>Трениковка по CSS</h2>

      <Textarea value={code} readonly />

      <Textarea value={userCode} onChangeFunc={onChangeUserCode} readonly={false} />

      <ReactModal isOpen={modalIsOpen}>
        <div>
          <span>
            Ошибка)) Вы набрали {currentUserChar}, а необходимо {currentRightChar}
          </span>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <Button type="button" onClick={closeModal} autoFocus={modalIsOpen}>
            ОК
          </Button>
        </div>
      </ReactModal>

      <Button type="button">Проверить</Button>
    </div>
  );
};
