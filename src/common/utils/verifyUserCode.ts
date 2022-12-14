import { Nullable } from '../types/Nullable';

export const verifyUserCode = (userCode: string, trainingCode: string): ResultType => {
  const arrayOfLinesUserCode = userCode.split(/\r?\n/).filter(element => element.trim());

  const newUserCode = arrayOfLinesUserCode.join('\n');

  const resultObj = {
    userCode: newUserCode,
    isDifference: false,
    firstLineWithMistake: null,
    numbersOfLinesWithMistakes: null,
  };

  if (newUserCode === trainingCode) {
    resultObj.isDifference = true;

    return resultObj;
  }

  return resultObj;
};

type ResultType = {
  userCode: string;
  isDifference: boolean;
  firstLineWithMistake: Nullable<number>;
  numbersOfLinesWithMistakes: Nullable<number[]>;
};
