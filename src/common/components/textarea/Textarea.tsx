import React, { ChangeEvent, LegacyRef } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import { getLineNumbers } from '../../utils/getLineNumbers';

import styles from './Textarea.module.css';

type Props = {
  onChangeFunc: (value: string) => void;
  readonly: boolean;
  textAreaRef: LegacyRef<HTMLTextAreaElement>;
};

export const Textarea = ({
  onChangeFunc,
  readonly,
  textAreaRef,
}: Props): ReturnComponentType => {
  const userCodeText = useAppSelector(state => state.training.userCode.userCodeText);

  const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    onChangeFunc(e.currentTarget.value);
  };

  return (
    <div className={styles.textField}>
      <div className={styles.numbers}>
        {getLineNumbers(userCodeText).map(line => (
          <span key={line} />
        ))}
      </div>

      <pre>
        <code>
          <textarea
            ref={textAreaRef}
            value={userCodeText}
            onChange={onChangeCallback}
            readOnly={readonly}
            onPaste={e => e.preventDefault()}
          />
        </code>
      </pre>
    </div>
  );
};
