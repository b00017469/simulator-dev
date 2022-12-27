import { Nullable } from '../types/Nullable';

export const getResultMessage = (
  isDifference: Nullable<boolean>,
  isDifferentNumberOfLines: Nullable<boolean>,
): string => {
  let message = '';

  if (isDifferentNumberOfLines === true) {
    message += 'Количество строк в вашем коде и в примере разное. ';
  }
  if (isDifference === true) {
    message += 'Есть ошибки, вы можете исправить код. ';
  }
  if (isDifference === false) {
    message += 'Поздаравляю! Ошибок не обнаружено! ';
  }

  return message;
};
