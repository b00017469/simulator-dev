import React, { LegacyRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '../../../common/components/button/Button';
import { Modal } from '../../../common/components/modal/Modal';
import { Textarea } from '../../../common/components/textarea/Textarea';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types/ReturnComponentType';
import { verifyUserCode } from '../../../common/utils/verifyUserCode';
import { setLinesWithMistakes, setUserCodeText } from '../reducer/trainingReducer';

type Props = {
  textAreaRef: LegacyRef<HTMLTextAreaElement>;
};

export const EndCheckModeTextarea = ({ textAreaRef }: Props): ReturnComponentType => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpenModal] = useState(false);

  const trainingCodeText = useAppSelector(
    state => state.training.trainingCode.trainingCodeText,
  );
  const userCodeText = useAppSelector(state => state.training.userCode.userCodeText);

  const onChangeUserCode = (userCode: string): void => {
    dispatch(setUserCodeText(userCode));
  };

  const checkUserCode = (): void => {
    const result = verifyUserCode(userCodeText, trainingCodeText);

    dispatch(setUserCodeText(result.userCode));
    dispatch(setLinesWithMistakes(result.linesWithMistakes));

    setIsOpenModal(!!result.isDifference);
  };

  return (
    <div>
      <Textarea
        textAreaRef={textAreaRef}
        onChangeFunc={onChangeUserCode}
        readonly={!trainingCodeText.length}
      />

      <Button onClick={checkUserCode}>Проверить</Button>

      <Modal show={modalIsOpen} enableBackground>
        <div>Check string count</div>
        <Button onClick={() => setIsOpenModal(false)}>Ok</Button>
      </Modal>
    </div>
  );
};
