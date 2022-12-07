import React from 'react';

import { Modal } from '../../../common/components/modal/Modal';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';

import { FinalMessage } from './messages/FinalMessage';
import { MistakeMessage } from './messages/MistakeMessage';

type Props = {
  currentUserChar?: string;
  currentRightChar?: string;
  closeModal: () => void;
  clearUserCode: () => void;
  modalIsOpen: boolean;
  isEndTraining: boolean;
};

export const MessageModal = ({
  currentUserChar,
  currentRightChar,
  closeModal,
  modalIsOpen,
  isEndTraining,
  clearUserCode,
}: Props): ReturnComponentType => {
  return (
    <Modal show={modalIsOpen} enableBackground>
      {isEndTraining ? (
        <FinalMessage closeModal={closeModal} clearUserCode={clearUserCode} />
      ) : (
        <MistakeMessage
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          currentUserChar={currentUserChar}
          currentRightChar={currentRightChar}
        />
      )}
    </Modal>
  );
};
