import React from 'react';

import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { getLineNumbers } from '../../../utils/getLineNumbers';

import styles from './TextareaReadOnly.module.css';

type Props = {
  value: string;
};

export const TextareaReadOnly = ({ value }: Props): ReturnComponentType => {
  return (
    <div className={styles.textField}>
      <div className={styles.numbers}>
        {getLineNumbers(value).map(line => (
          <span key={line} defaultValue={line} />
        ))}
      </div>

      <pre>
        <code>
          <p className={styles.code}>{value}</p>
        </code>
      </pre>
    </div>
  );
};
