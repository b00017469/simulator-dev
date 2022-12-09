export const getResultMistakesMessage = (mistakesCount: number): string => {
  if (mistakesCount === 0) return 'Красавчик!! Справился без ошибок!!!';
  // eslint-disable-next-line no-magic-numbers
  if (mistakesCount < 5) return `Хороший результат! Всего ${mistakesCount} ошибок!`;
  // eslint-disable-next-line no-magic-numbers
  if (mistakesCount > 5)
    return `Ты допустил ${mistakesCount} ошибок. Нужно стараться писать без ошибок...`;

  return '';
};
