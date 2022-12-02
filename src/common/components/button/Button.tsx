import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import styles from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  className,
  ...restProps
}: DefaultButtonPropsType): ReturnComponentType => {
  const finalClassName = `${styles.buttonContained} ${className}`;

  // eslint-disable-next-line react/button-has-type
  return <button className={finalClassName} {...restProps} />;
};
