import React, { ChangeEvent, useState } from 'react';

import ReactModal from 'react-modal';

import { Textarea } from '../../common/components/textarea/Textarea';
import { ReturnComponentType } from '../../common/types/ReturnComponentType';
import { codeCategories } from '../../db/codeCategories';

import styles from './Training.module.css';

export const Training = (): ReturnComponentType => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [userText, setUserText] = useState<string>('');
  const [lastUser, setLastUser] = useState<string>('');
  const [currentDev, setCurrentDev] = useState<string>('');
  const def = codeCategories[0].subcategories[0].code[0].content;

  const onChangeHandle = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const lastUser = e.currentTarget.value.slice(-1);
    const currentDev = def.charAt(e.currentTarget.value.length - 1);
    // const currNext = def.charAt(e.currentTarget.value.length);

    if (lastUser === currentDev) {
      if (def.charAt(e.currentTarget.value.length) === '\n') {
        let space = '\n';
        let i = 1;

        while (def.charAt(e.currentTarget.value.length + i) === ' ') {
          space += ' ';
          i += 1;
        }

        return setUserText(`${e.currentTarget.value}${space}`);
      }

      return setUserText(e.currentTarget.value);
    }
    setLastUser(lastUser);
    setCurrentDev(currentDev);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div className={styles.trainingPanel}>
      <h2>Трениковка по CSS</h2>

      <Textarea value={def} />

      <Textarea value={userText} onChange={onChangeHandle} />

      <ReactModal isOpen={modalIsOpen}>
        <div>
          <span>
            Ошибка)) Вы набрали {lastUser}, а необходимо {currentDev}
          </span>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <button type="button" onClick={closeModal} autoFocus={modalIsOpen}>
            ОК
          </button>
        </div>
      </ReactModal>

      <button type="button">Проверить</button>
    </div>
  );
};
