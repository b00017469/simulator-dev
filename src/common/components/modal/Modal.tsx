import React, { ReactNode } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Modal.module.css';

type Props = {
  enableBackground?: boolean;
  backgroundStyle?: string;
  backgroundOnClick?: () => void;
  modalStyle?: string;
  modalOnClick?: () => void;
  show: boolean;
  children: ReactNode;
};

export const Modal = ({
  enableBackground,
  backgroundStyle,
  backgroundOnClick,
  modalStyle,
  modalOnClick,
  show,
  children,
}: Props): ReturnComponentType => {
  const finalBackgroundStyle = `${style.background} ${backgroundStyle}`;
  const finalModalStyle = `${style.modal} ${modalStyle}`;

  if (!show) return null;

  return (
    <>
      {enableBackground && (
        <div
          className={finalBackgroundStyle}
          onClick={backgroundOnClick}
          onKeyUp={backgroundOnClick}
        />
      )}
      <div className={finalModalStyle} onClick={modalOnClick} onKeyUp={modalOnClick}>
        {children}
      </div>
    </>
  );
};
