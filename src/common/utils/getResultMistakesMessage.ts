export const getResultMistakesMessage = (mistakesCount: string): string => {
  const count = Number(mistakesCount);

  if (count === 0) return 'Красавчик!! Справился без ошибок!!!';
  // eslint-disable-next-line no-magic-numbers
  if (count < 5) return `Хороший результат! Всего ${mistakesCount} ошибок!`;
  // eslint-disable-next-line no-magic-numbers
  if (count > 5)
    return `Ты допустил ${mistakesCount} ошибок. Нужно стараться писать без ошибок...`;

  return '';
};
