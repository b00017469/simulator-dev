import { Nullable } from '../types/Nullable';

export const verifyUserCode = (userCode: string, trainingCode: string): ResultType => {
  const arrayOfLinesUserCode = userCode.split(/\r?\n/).filter(element => element.trim());

  const newUserCode = arrayOfLinesUserCode.join('\n');

  const resultObj: ResultType = {
    userCode: newUserCode,
    isDifferentNumberOfLines: null,
    isDifference: null,
    linesWithMistakes: [],
  };

  if (newUserCode === trainingCode) {
    resultObj.isDifference = false;

    return resultObj;
  }

  const arrayOfLinesTrainingCode = trainingCode.split(/\r?\n/);

  resultObj.isDifferentNumberOfLines =
    arrayOfLinesTrainingCode.length !== arrayOfLinesUserCode.length;

  const linesWithMistakes: number[] = [];

  for (let i = 0; i < arrayOfLinesTrainingCode.length; i += 1) {
    if (
      !arrayOfLinesUserCode[i] ||
      arrayOfLinesTrainingCode[i].replace(/\s/g, '') !==
        arrayOfLinesUserCode[i].replace(/\s/g, '')
    ) {
      linesWithMistakes.push(i);
    }
  }

  resultObj.linesWithMistakes = linesWithMistakes;
  resultObj.isDifference = linesWithMistakes.length > 0;

  return resultObj;
};

type ResultType = {
  userCode: string;
  isDifferentNumberOfLines: Nullable<boolean>;
  isDifference: Nullable<boolean>;
  linesWithMistakes: number[];
};
