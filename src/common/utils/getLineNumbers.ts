export const getLineNumbers = (text: string): string => {
  let numbers = '';

  for (let i = 0; i < text.split('\n').length; i += 1) {
    numbers += `${i + 1}.\n`;
  }

  return numbers;
};
