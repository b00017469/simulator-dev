import React from 'react';

import { Modal } from '../../../common/components/modal/Modal';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';

import { FinalMessage } from './messages/FinalMessage';
import { MistakeMessage } from './messages/MistakeMessage';

type Props = {
  closeModal: () => void;
  modalIsOpen: boolean;
  isEndTraining: boolean;
};

export const MessageModal = ({
  closeModal,
  modalIsOpen,
  isEndTraining,
}: Props): ReturnComponentType => {
  return (
    <Modal show={modalIsOpen} enableBackground>
      {isEndTraining ? (
        <FinalMessage closeModal={closeModal} />
      ) : (
        <MistakeMessage closeModal={closeModal} modalIsOpen={modalIsOpen} />
      )}
    </Modal>
  );
};
