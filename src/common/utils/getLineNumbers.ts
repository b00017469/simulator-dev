export const getLineNumbers = (text: string): number[] => {
  const numbers = [];

  for (let i = 0; i < text.split('\n').length; i += 1) {
    numbers.push(i + 1);
  }

  return numbers;
};
