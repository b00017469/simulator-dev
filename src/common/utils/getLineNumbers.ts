export const getLineNumbers = (text: string): string[] => {
  const numbers = [];

  for (let i = 0; i < text.split('\n').length; i += 1) {
    numbers.push((i + 1).toString());
  }

  return numbers;
};
