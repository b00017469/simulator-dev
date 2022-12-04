import React, { ChangeEvent, LegacyRef } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';
import { getLineNumbers } from '../../utils/getLineNumbers';

import styles from './Textarea.module.css';

type Props = {
  value: string;
  onChangeFunc?: (value: string) => void;
  readonly: boolean;
  isFocus?: boolean;
  textAreaRef?: LegacyRef<HTMLTextAreaElement> | undefined;
};

export const Textarea = ({
  value,
  onChangeFunc,
  readonly,
  isFocus,
  textAreaRef,
}: Props): ReturnComponentType => {
  const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChangeFunc) {
      onChangeFunc(e.currentTarget.value);
    }
  };

  return (
    <div className={styles.textField}>
      <div className={styles.numbers}>
        {getLineNumbers(value).map(line => (
          <span key={line} />
        ))}
      </div>
      <pre>
        <code>
          <textarea
            autoFocus={isFocus}
            ref={textAreaRef}
            value={value}
            onChange={onChangeCallback}
            readOnly={readonly}
          />
        </code>
      </pre>
    </div>
  );
};
