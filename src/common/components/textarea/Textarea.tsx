import React, { ChangeEvent } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import styles from './Textarea.module.css';

type Props = {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({ value, onChange }: Props): ReturnComponentType => {
  const linesCount = value?.split('\n').length;
  const getNumbers = (): string => {
    let numbers = '';

    if (linesCount)
      for (let i = 0; i < linesCount; i += 1) {
        numbers += `${i + 1}.\n`;
      }

    return numbers;
  };
  const lineNumbers = getNumbers();

  return (
    <div className={styles.textField}>
      <div className={styles.numbers}>
        <pre>{lineNumbers}</pre>
      </div>
      <pre>
        <code>
          <textarea value={value} onChange={onChange} />
        </code>
      </pre>
    </div>
  );
};
