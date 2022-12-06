import { speedMessage } from '../enum/speedMessage';

export const getResultMessage = (speedTyping: string, maxUsersSpeed: string): string => {
  const result = Number(speedTyping) / Number(maxUsersSpeed);

  // eslint-disable-next-line no-magic-numbers
  if (result < 0.3) return speedMessage.BAD;
  // eslint-disable-next-line no-magic-numbers
  if (result < 0.5) return speedMessage.NORMAL;
  // eslint-disable-next-line no-magic-numbers
  if (result < 0.8) return speedMessage.GOOD;
  if (result < 1) return speedMessage.GREAT;
  if (result >= 1) return speedMessage.PERFECT;

  return '';
};
