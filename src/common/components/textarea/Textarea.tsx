import React, { ChangeEvent } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';
import { getLineNumbers } from '../../utils/getLineNumbers';

import styles from './Textarea.module.css';

type Props = {
  value: string;
  onChangeFunc?: (value: string) => void;
  readonly: boolean;
};

export const Textarea = ({
  value,
  onChangeFunc,
  readonly,
}: Props): ReturnComponentType => {
  const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChangeFunc) {
      onChangeFunc(e.currentTarget.value);
    }
  };

  return (
    <div className={styles.textField}>
      <div className={styles.numbers}>
        <pre>{getLineNumbers(value)}</pre>
      </div>
      <pre>
        <code>
          <textarea value={value} onChange={onChangeCallback} readOnly={readonly} />
        </code>
      </pre>
    </div>
  );
};
