export const formatText = (correctCode: string, userCode: string): string => {
  if (correctCode.charAt(userCode.length) === '\n') {
    let space = '\n';
    let i = 1;

    while (correctCode.charAt(userCode.length + i) === ' ') {
      space += ' ';
      i += 1;
    }

    return `${userCode}${space}`;
  }

  return userCode;
};
