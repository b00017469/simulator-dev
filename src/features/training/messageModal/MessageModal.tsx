import React from 'react';

import { Button } from '../../../common/components/button/Button';
import { Modal } from '../../../common/components/modal/Modal';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';

import style from './MessageModal.module.css';

type Props = {
  currentUserChar: string;
  currentRightChar: string;
  closeModal: () => void;
  modalIsOpen: boolean;
};

export const MessageModal = ({
  currentUserChar,
  currentRightChar,
  closeModal,
  modalIsOpen,
}: Props): ReturnComponentType => {
  return (
    <Modal show={modalIsOpen} enableBackground>
      <div>
        <p className={style.message}>
          Ошибка)) Вы набрали <span>{currentUserChar}</span>, а необходимо{' '}
          <span>{currentRightChar}</span>
        </p>
        <Button type="button" onClick={closeModal} autoFocus={modalIsOpen}>
          ОК
        </Button>
      </div>
    </Modal>
  );
};
