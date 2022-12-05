const MINUTE = 60000;

export const calculateSpeed = (
  startTime: number,
  pauseTime: number,
  characterCount: number,
): number => {
  return Math.floor((characterCount * MINUTE) / (Date.now() - startTime - pauseTime));
};
