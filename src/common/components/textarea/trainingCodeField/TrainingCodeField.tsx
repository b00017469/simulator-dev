import React from 'react';

import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { getLineNumbers } from '../../../utils/getLineNumbers';

import styles from './TrainingCodeField.module.css';

type Props = {
  value: string;
  linesWithMistakes: number[];
};

export const TrainingCodeField = ({
  value,
  linesWithMistakes,
}: Props): ReturnComponentType => {
  const arrayOfLinesTrainingCode = value.split(/\r?\n/);

  return (
    <div className={styles.textField}>
      <div className={styles.numbers}>
        {getLineNumbers(value).map(line => (
          <span
            key={line}
            className={linesWithMistakes.includes(line - 1) ? styles.mistake : ''}
            defaultValue={line}
          />
        ))}
      </div>

      <pre>
        <code>
          <div className={styles.code}>
            {arrayOfLinesTrainingCode.map((line, index) =>
              linesWithMistakes.includes(index) ? (
                // eslint-disable-next-line react/no-array-index-key
                <div className={styles.mistake} key={index}>
                  {line}
                </div>
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index}>{line}</div>
              ),
            )}
          </div>
        </code>
      </pre>
    </div>
  );
};
